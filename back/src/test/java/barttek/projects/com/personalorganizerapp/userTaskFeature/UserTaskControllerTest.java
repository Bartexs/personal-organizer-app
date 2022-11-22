//package barttek.projects.com.personalorganizerapp.userTaskFeature;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Disabled;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.annotation.DirtiesContext;
//
//import java.time.LocalDate;
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//@SpringBootTest
//@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
//class UserTaskControllerTest {
//    List<UserTask> userTasksForTests;
//
//    @Autowired
//    private UserTaskService userTaskService;
//
//    UserTaskController userTaskController;
//
//    @BeforeEach
//    @Disabled
//    void setUp() {
//        userTaskController = new UserTaskController(userTaskService);
//        LocalDate today = LocalDate.now();
//        LocalDate notTodayButAfter = today.plusDays(5);
//        LocalDate notTodayButBefore = today.minusDays(10);
//
//        UserTask uTask1 = new UserTask("Throw garbage",null, true, today, null, false, false, null);
//        UserTask uTask2 = new UserTask("Feed kitty",null, true, today, null, false, false, null);
//        UserTask uTask3 = new UserTask("Do nothing", null, false, today, null, false, false, null);
//        UserTask uTask4 = new UserTask("Wheelie around the city", null, true, notTodayButAfter, null, false, false, null);
//        UserTask uTask5 = new UserTask("Wheelie around the block", null, false, notTodayButBefore, null, false, false, null);
//
//        userTasksForTests = List.of(uTask1, uTask2, uTask3, uTask4,uTask5);
//
//        userTaskService.addUserTask(uTask1);
//        userTaskService.addUserTask(uTask2);
//        userTaskService.addUserTask(uTask3);
//        userTaskService.addUserTask(uTask4);
//        userTaskService.addUserTask(uTask5);
//    }
//
//    @Test
//    @Disabled
//    void getAllUserTasks() {
//        assertEquals(this.userTasksForTests, userTaskController.getAllUserTasks().getBody());
//    }
//    @Test
//    @Disabled
//    void getUserTaskByDate() {
//        LocalDate today = LocalDate.now();
//
//        List<UserTask> userTaskList = new ArrayList<>();
//        assertEquals(userTaskList, userTaskController.getUserTaskByDate("2022-10-03").getBody());
//
//        userTaskList = List.of(
//                new UserTask("Throw garbage",null, true, today, null, false, false, null),
//                new UserTask("Feed kitty",null, true, today, null, false, false, null),
//                new UserTask("Do nothing", null, false, today, null, false, false, null));
//
//        assertEquals(userTaskList, userTaskController.getUserTaskByDate(today.toString()).getBody());
//    }
//
//    @Test
//    @Disabled
//    void getUserTasksTasksByDateRange() {
//        LocalDate today = LocalDate.now();
//        LocalDate notTodayButAfter = today.plusDays(5);
//        LocalDate notTodayButBefore = today.minusDays(10);
//
//        List<UserTask> userTaskListFromDatabase = userTaskController.getUserTasksTasksByDateRange(notTodayButBefore.toString(), notTodayButAfter.toString()).getBody();
//
//        assertEquals(this.userTasksForTests, userTaskListFromDatabase);
//    }
//
//    @Test
//    @Disabled
//    void findCompletedUserTasks() {
//        LocalDate today = LocalDate.now();
//        LocalDate notTodayButAfter = today.plusDays(5);
//
//        List<UserTask> completedTasks = List.of(
//                new UserTask("Throw garbage",null, true, today, null, false, false, null),
//                new UserTask("Feed kitty",null, true, today, null, false, false, null),
//                new UserTask("Wheelie around the city", null, true, notTodayButAfter, null, false, false, null)
//        );
//
//
//        assertEquals(completedTasks, userTaskController.findCompletedUserTasks().getBody());
//    }
//
////    it should show tasks via COMPLETION date and only on this day
//    @Test
//    void findCompletedUserTasksByDate() {
//        LocalDate today = LocalDate.now();
//
//        List<UserTask> completedTasksByDate = List.of(
//                new UserTask("Throw garbage",null, true, today, null, false, false, null),
//                new UserTask("Feed kitty",null, true, today, null, false, false, null),
//        );
//
//        assertEquals(completedTasksByDate, userTaskController.findCompletedUserTasksByDate(today.toString()).getBody());
//    }
//
//    @Test
//    @Disabled
//    void findNotCompletedUserTasks() {
//        LocalDate today = LocalDate.now();
//        LocalDate notTodayButAfter = today.plusDays(5);
//        LocalDate notTodayButBefore = today.minusDays(10);
//
//        List<UserTask> notCompletedTasks = List.of(
//                new UserTask("Do nothing", false, today, null, null),
//                new UserTask("Wheelie around the block", false, notTodayButBefore, null, null)
//        );
//
//        assertEquals(notCompletedTasks, userTaskController.findNotCompletedUserTasks().getBody());
//    }
//
//    // it should return all the tasks with that equals given that AND later date
//    @Test
//    @Disabled
//    void findNotCompletedUserTasksByDate() {
//        LocalDate today = LocalDate.now();
//        LocalDate notTodayButBefore = today.minusDays(10);
//
//        List<UserTask> notCompletedTasksByDateFirstDate = List.of(
//                new UserTask("Do nothing", false, today, null, null),
//                new UserTask("Wheelie around the block", false, notTodayButBefore, null, null)
//        );
//
//        List<UserTask> notCompletedTasksByDateSecondDate = List.of(
//                new UserTask("Wheelie around the block", false, notTodayButBefore, null, null)
//        );
//
//        System.out.println(notCompletedTasksByDateFirstDate.toString());
//        System.out.println(userTaskController.findNotCompletedUserTasksByDate(today.toString()).getBody());
//
//        assertEquals(notCompletedTasksByDateFirstDate, userTaskController.findNotCompletedUserTasksByDate(today.toString()).getBody());
//        assertEquals(notCompletedTasksByDateSecondDate, userTaskController.findNotCompletedUserTasksByDate(notTodayButBefore.toString()).getBody());
//    }
//
//    @Test
//    @Disabled
//    void getUserTaskById() {
//        for (UserTask userTasksForTest : this.userTasksForTests) {
//            Long testingId = userTasksForTest.getId();
//            assertEquals(userTasksForTest, this.userTaskController.getUserTaskById(testingId).getBody());
//        }
////        create test assert throws to check if it throws exception task not found
//    }
//
//    @Test
//    @Disabled
//    void addUserTask() {
//        LocalDate today = LocalDate.now();
//
//        UserTask userTaskTest = new UserTask("Bench press 200kgs", false, today, null, null);
//
//        userTaskController.addUserTask(userTaskTest);
//
//        assertEquals(userTaskTest, userTaskController.getUserTaskById(6L).getBody());
//    }
//
//    @Test
//    @Disabled
//    void updateUserTask() {
//        LocalDate today = LocalDate.now();
//        UserTask uTask2 = new UserTask("Feed kitty", true, today, null, null);
//        uTask2.setCompleted(false);
//
//        UserTask uTaskFromDatabase = userTaskController.getUserTaskById(2L).getBody();
//
//        assert uTaskFromDatabase != null;
//        uTaskFromDatabase.setCompleted(false);
//
//        userTaskController.updateUserTask(uTaskFromDatabase);
//
//        assertEquals(uTask2, uTaskFromDatabase);
//    }
//
//
//    @Test
//    @Disabled
//    void deleteUserTask() {
//        LocalDate tomorrow = LocalDate.now().plusDays(1);
//
//        UserTask mostImportantTask = new UserTask("Find job as a programmer", false, tomorrow, null, null);
//
//        this.userTaskController.addUserTask(mostImportantTask);
//
//        assertEquals(mostImportantTask, this.userTaskController.getUserTaskById(6L).getBody());
//
//        this.userTaskController.deleteUserTask(6L);
//
//        Exception exception = assertThrows(UserNotFoundException.class, () -> this.userTaskController.getUserTaskById(6L).getBody());
//
//        String expectedMessage = "UserTask with id 6not found";
//        String actualMessage = exception.getMessage();
//
//        assertTrue(actualMessage.contains(expectedMessage));
//    }
//}