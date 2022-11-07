package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
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

        UserTask uTask1 = new UserTask(1L, "Throw garbage", false, today, null);
        UserTask uTask2 = new UserTask(2L, "Feed kitty", false, today, null);
        UserTask uTask3 = new UserTask(3L, "Do nothing", false, today, null);
        UserTask uTask4 = new UserTask(4L, "Wheelie around the city", false, notTodayButAfter, null);
        UserTask uTask5 = new UserTask(5L, "Wheelie around the block", false, notTodayButBefore, null);

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

    }

    @Test
    void getUserTasksTasksByDateRange() {
    }

    @Test
    void findCompletedUserTasks() {

    }

    @Test
    void findCompletedUserTasksByDate() {
    }

    @Test
    void findNotCompletedUserTasks() {
    }

    @Test
    void findNotCompletedUserTasksByDate() {
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

    }

    @Test
    void updateUserTask() {

    }

    @Test
    void deleteUserTask() {

    }
}