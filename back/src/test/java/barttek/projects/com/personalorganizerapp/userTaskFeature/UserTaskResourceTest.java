package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.apache.catalina.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class UserTaskResourceTest {
    List<UserTask> userTasksForTests;

    @Autowired
    private UserTaskService userTaskService;

    UserTaskResource userTaskResource;

    @BeforeEach
    void setUp() {
        userTaskResource = new UserTaskResource(userTaskService);
        LocalDate today = LocalDate.now();
        LocalDate notTodayButAfter = today.plusDays(5);
        LocalDate notTodayButBefore = today.minusDays(10);

        UserTask uTask1 = new UserTask("Throw garbage", true, today, null);
        UserTask uTask2 = new UserTask("Feed kitty", true, today, null);
        UserTask uTask3 = new UserTask("Do nothing", false, today, null);
        UserTask uTask4 = new UserTask("Wheelie around the city", true, notTodayButAfter, null);
        UserTask uTask5 = new UserTask("Wheelie around the block", false, notTodayButBefore, null);

        userTasksForTests = List.of(uTask1, uTask2, uTask3, uTask4,uTask5);

        userTaskService.addUserTask(uTask1);
        userTaskService.addUserTask(uTask2);
        userTaskService.addUserTask(uTask3);
        userTaskService.addUserTask(uTask4);
        userTaskService.addUserTask(uTask5);
    }

    @Test
    void getAllUserTasks() {
        assertEquals(this.userTasksForTests, userTaskResource.getAllUserTasks().getBody());
    }
    @Test
    void getUserTaskByDate() {
        LocalDate today = LocalDate.now();

        List<UserTask> userTaskList = new ArrayList<>();
        assertEquals(userTaskList, userTaskResource.getUserTaskByDate("2022-10-03").getBody());

        userTaskList = List.of(
                new UserTask("Throw garbage", true, today, null),
                new UserTask("Feed kitty", true, today, null),
                new UserTask("Do nothing", false, today, null));

        assertEquals(userTaskList, userTaskResource.getUserTaskByDate(today.toString()).getBody());
    }

    @Test
    void getUserTasksTasksByDateRange() {
        LocalDate today = LocalDate.now();
        LocalDate notTodayButAfter = today.plusDays(5);
        LocalDate notTodayButBefore = today.minusDays(10);

        List<UserTask> userTaskListFromDatabase = userTaskResource.getUserTasksTasksByDateRange(notTodayButBefore.toString(), notTodayButAfter.toString()).getBody();

        assertEquals(this.userTasksForTests, userTaskListFromDatabase);
    }

    @Test
    void findCompletedUserTasks() {
        LocalDate today = LocalDate.now();
        LocalDate notTodayButAfter = today.plusDays(5);

        List<UserTask> completedTasks = List.of(
                new UserTask("Throw garbage", true, today, null),
                new UserTask("Feed kitty", true, today, null),
                new UserTask("Wheelie around the city", true, notTodayButAfter, null)
        );


        assertEquals(completedTasks, userTaskResource.findCompletedUserTasks().getBody());
    }

    @Test
    void findCompletedUserTasksByDate() {
        LocalDate today = LocalDate.now();

        List<UserTask> completedTasksByDate = List.of(
                new UserTask("Throw garbage", true, today, null),
                new UserTask("Feed kitty", true, today, null)
        );

        assertEquals(completedTasksByDate, userTaskResource.findCompletedUserTasksByDate(today.toString()).getBody());
    }

    @Test
    void findNotCompletedUserTasks() {
        LocalDate today = LocalDate.now();
        LocalDate notTodayButAfter = today.plusDays(5);
        LocalDate notTodayButBefore = today.minusDays(10);

        List<UserTask> notCompletedTasks = List.of(
                new UserTask("Do nothing", false, today, null),
                new UserTask("Wheelie around the block", false, notTodayButBefore, null)
        );

        assertEquals(notCompletedTasks, userTaskResource.findNotCompletedUserTasks().getBody());
    }

    @Test
    void findNotCompletedUserTasksByDate() {
        LocalDate today = LocalDate.now();
        LocalDate notTodayButBefore = today.minusDays(10);

        List<UserTask> notCompletedTasksByDateFirstDate = List.of(
                new UserTask("Do nothing", false, today, null)
        );

        List<UserTask> notCompletedTasksByDateSecondDate = List.of(
                new UserTask("Wheelie around the block", false, notTodayButBefore, null)
        );

        System.out.println(notCompletedTasksByDateFirstDate.toString());
        System.out.println(userTaskResource.findNotCompletedUserTasksByDate(today.toString()).getBody());

        assertEquals(notCompletedTasksByDateFirstDate, userTaskResource.findNotCompletedUserTasksByDate(today.toString()).getBody());
        assertEquals(notCompletedTasksByDateSecondDate, userTaskResource.findNotCompletedUserTasksByDate(notTodayButBefore.toString()).getBody());
    }

    @Test
    void getUserTaskById() {
        for (UserTask userTasksForTest : this.userTasksForTests) {
            Long testingId = userTasksForTest.getId();
            assertEquals(userTasksForTest, this.userTaskResource.getUserTaskById(testingId).getBody());
        }
//        create test assert throws to check if it throws exception task not found
    }

    @Test
    void addUserTask() {
        LocalDate today = LocalDate.now();

        UserTask userTaskTest = new UserTask("Bench press 200kgs", false, today, null);

        userTaskResource.addUserTask(userTaskTest);

        assertEquals(userTaskTest, userTaskResource.getUserTaskById(6L).getBody());
    }

    @Test
    void updateUserTask() {
        LocalDate today = LocalDate.now();
        UserTask uTask2 = new UserTask("Feed kitty", true, today, null);
        uTask2.setCompleted(false);

        UserTask uTaskFromDatabase = userTaskResource.getUserTaskById(2L).getBody();

        assert uTaskFromDatabase != null;
        uTaskFromDatabase.setCompleted(false);

        userTaskResource.updateUserTask(uTaskFromDatabase);

        assertEquals(uTask2, uTaskFromDatabase);
    }


    @Test
    void deleteUserTask() {
        LocalDate tomorrow = LocalDate.now().plusDays(1);

        UserTask mostImportantTask = new UserTask("Find job as a programmer", false, tomorrow, null);

        this.userTaskResource.addUserTask(mostImportantTask);

        assertEquals(mostImportantTask, this.userTaskResource.getUserTaskById(6L).getBody());

        this.userTaskResource.deleteUserTask(6L);

        Exception exception = assertThrows(UserNotFoundException.class, () -> this.userTaskResource.getUserTaskById(6L).getBody());

        String expectedMessage = "UserTask with id 6not found";
        String actualMessage = exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }
}