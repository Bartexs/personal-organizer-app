package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;




@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class UserTaskServiceTest {
    @Autowired
    private UserTaskService userTaskService;

    @BeforeEach
    void setUp() {

    }

    @Test
    void addUserTask() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask ut1 = new UserTask("Throw garbage", false, scheduleDate, completionDate);

        userTaskService.addUserTask(ut1);

        assertEquals(ut1, userTaskService.findUserTaskById(1L));
    }

    @Test
    void deleteUserTask() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask ut1 = new UserTask("Throw garbage", false, scheduleDate, completionDate);

        userTaskService.addUserTask(ut1);
        userTaskService.deleteUserTask(1L);

        assertNotEquals(ut1, userTaskService.findUserTaskById(1L));
    }

    @Test
    void findAllCreatedUserTasks() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask ut1 = new UserTask("Throw garbage", false, scheduleDate, completionDate);
        UserTask ut2 = new UserTask("Make monies", true, scheduleDate, completionDate);
        List<UserTask> testList = List.of(ut1, ut2);

        userTaskService.addUserTask(ut1);
        userTaskService.addUserTask(ut2);

        assertEquals(testList, userTaskService.findAllCreatedUserTasks());
    }

    @Test
    void findAllScheduledUserTasksWithinScheduledDateRange() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);


        UserTask ut1 = new UserTask("Throw garbage", false, scheduleDate, completionDate);
        UserTask ut2 = new UserTask("Make monies", true, scheduleDate, completionDate);
        List<UserTask> testList = new ArrayList<>();
        testList.add(ut1);
        testList.add(ut2);

        UserTask ut3 = new UserTask("Make more monies", true, scheduleDate.plusDays(50), completionDate);
        UserTask ut4 = new UserTask("Make less monies", true, scheduleDate.minusDays(50), completionDate);

        userTaskService.addUserTask(ut1);
        userTaskService.addUserTask(ut2);
        userTaskService.addUserTask(ut3);
        userTaskService.addUserTask(ut4);

        assertEquals(testList, userTaskService.findAllScheduledUserTasksWithinScheduledDateRange("2022-11-9", "2022-11-13"));

        LocalDate firstBoundary = LocalDate.of(2022, 11,9);
        LocalDate secondBoundary = LocalDate.of(2022, 11,13);

        UserTask ut5 = new UserTask("First boundary task", true, firstBoundary, completionDate);
        UserTask ut6 = new UserTask("Second boundary task", false, secondBoundary, completionDate);

        testList.add(ut5);
        testList.add(ut6);
        userTaskService.addUserTask(ut5);
        userTaskService.addUserTask(ut6);
        assertEquals(testList, userTaskService.findAllScheduledUserTasksWithinScheduledDateRange("2022-11-9", "2022-11-13"));
    }

    @Test
    void findAllCompletedUserTasks() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask ut1 = new UserTask("Throw garbage", false, scheduleDate, completionDate);
        UserTask ut2 = new UserTask("Make monies", true, scheduleDate, completionDate);
        UserTask ut3 = new UserTask("Make more monies", false, scheduleDate.plusDays(50), completionDate);
        UserTask ut4 = new UserTask("Make less monies", false, scheduleDate.minusDays(50), completionDate);

        userTaskService.addUserTask(ut1);
        userTaskService.addUserTask(ut2);
        userTaskService.addUserTask(ut3);
        userTaskService.addUserTask(ut4);

        assertEquals(ut2, userTaskService.findAllCompletedUserTasks());
    }

    @Test
    void findCompletedUserTasksByCompletionDate() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask ut1 = new UserTask("Throw garbage", false, scheduleDate, completionDate);
        UserTask ut2 = new UserTask("Make monies", true, scheduleDate, completionDate);
        UserTask ut3 = new UserTask("Do nothing", false, scheduleDate, completionDate);
        UserTask ut4 = new UserTask("Find new job", true, scheduleDate, completionDate);
        UserTask ut5 = new UserTask("Make more monies", false, scheduleDate.plusDays(50), completionDate);
        UserTask ut6 = new UserTask("Make less monies", false, scheduleDate.minusDays(50), completionDate);
        List<UserTask> testList = List.of(ut2, ut4);

        userTaskService.addUserTask(ut1);
        userTaskService.addUserTask(ut2);
        userTaskService.addUserTask(ut3);
        userTaskService.addUserTask(ut4);
        userTaskService.addUserTask(ut5);
        userTaskService.addUserTask(ut6);

        assertEquals(testList, userTaskService.findCompletedUserTasksByCompletionDate("2022-11-12"));
    }

    @Test
    void findAllScheduledUserTasks() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask ut1 = new UserTask("Throw garbage", false, scheduleDate, completionDate);
        UserTask ut2 = new UserTask("Make monies", true, scheduleDate, completionDate);
        UserTask ut3 = new UserTask("Make more monies", false, scheduleDate.plusDays(50), completionDate);
        UserTask ut4 = new UserTask("Make less monies", false, scheduleDate.minusDays(50), completionDate);
        List<UserTask> testList = List.of(ut1, ut3, ut4);

        userTaskService.addUserTask(ut1);
        userTaskService.addUserTask(ut2);
        userTaskService.addUserTask(ut3);
        userTaskService.addUserTask(ut4);

        assertEquals(testList, userTaskService.findAllScheduledUserTasks());
    }

    @Test
    void findScheduledUserTasksByScheduleDate() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask ut1 = new UserTask("Throw garbage", false, scheduleDate, completionDate);
        UserTask ut2 = new UserTask("Make monies", true, scheduleDate, completionDate);
        UserTask ut3 = new UserTask("Do nothing", false, scheduleDate, completionDate);
        UserTask ut4 = new UserTask("Find new job", true, scheduleDate, completionDate);
        UserTask ut5 = new UserTask("Make more monies", false, scheduleDate.plusDays(50), completionDate);
        UserTask ut6 = new UserTask("Make less monies", false, scheduleDate.minusDays(50), completionDate);
        List<UserTask> testList = List.of(ut3);

        userTaskService.addUserTask(ut1);
        userTaskService.addUserTask(ut2);
        userTaskService.addUserTask(ut3);
        userTaskService.addUserTask(ut4);
        userTaskService.addUserTask(ut5);
        userTaskService.addUserTask(ut6);

        assertEquals(testList, userTaskService.findCompletedUserTasksByCompletionDate("2022-11-10"));
    }

    @Test
    void findUserTaskById() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask ut1 = new UserTask("Throw garbage", false, scheduleDate, completionDate);
        UserTask ut2 = new UserTask("Make monies", true, scheduleDate, completionDate);

        userTaskService.addUserTask(ut1);
        userTaskService.addUserTask(ut2);

        assertEquals(ut1, userTaskService.findUserTaskById(1L));
        assertNotEquals(ut2, userTaskService.findUserTaskById(1L));
    }

    @Test
    void updateUserTask() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask ut1 = new UserTask("Throw garbage", false, scheduleDate, completionDate);
        UserTask ut2 = new UserTask("Make monies", true, scheduleDate, completionDate);

        userTaskService.addUserTask(ut1);
        userTaskService.addUserTask(ut2);
        ut2.setCompleted(false);
        userTaskService.updateUserTask(ut2);

        assertEquals(ut2, userTaskService.findUserTaskById(2L));
    }
}