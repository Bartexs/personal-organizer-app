package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/user-task")
public class UserTaskController {
    private final UserTaskService userTaskService;

    public UserTaskController(UserTaskService userTaskService) {
        this.userTaskService = userTaskService;
    }

    //get userTasks ALL
    @GetMapping("/all")
    public ResponseEntity<List<UserTask>> findAllUserTasks() {
        List<UserTask> userTasks = userTaskService.findAll();
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }

    //get userTask by date ALL
    @GetMapping("/all/{date}")
    public ResponseEntity<List<UserTask>> findUserTasksByDateTaskToBeDone(@PathVariable("date")String date) {

        return new ResponseEntity<>( HttpStatus.OK);
    }

    //get userTask from date to date
    @GetMapping("/all/{date-from}/{date-end}")
    public ResponseEntity<List<UserTask>> findAllScheduledUserTasksWithinScheduledDateRange(@PathVariable("date-from") String dateFrom, @PathVariable("date-end") String dateEnd) {
        List<UserTask> userTasks = userTaskService.findAllScheduledUserTasksWithinScheduledDateRange(dateFrom, dateEnd);
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }

    //get all completed tasks <- archive
    @GetMapping("/completed")
    public ResponseEntity<List<UserTask>> findAllCompletedUserTasks() {
        List<UserTask> userTasks = userTaskService.findAllCompletedUserTasks();
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }

    @GetMapping("/not-completed")
    public ResponseEntity<List<UserTask>> findAllScheduledUserTasks() {
        List<UserTask> userTasks = userTaskService.findAllScheduledUserTasks();
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }
    //get userTask by date but COMPLETED
    @RequestMapping(
            value = "/completed",
            params = { "date" },
            method = GET
    )
    public ResponseEntity<List<UserTask>> findCompletedUserTasksByCompletionDate(@RequestParam("date")String date) {
        List<UserTask> userTasks = userTaskService.findCompletedUserTasksByCompletionDate(date);
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }

    //get userTask scheduled on given day
    @RequestMapping(
            value = "/not-completed",
            params = { "date" },
            method = GET
    )
    public ResponseEntity<List<UserTask>> findScheduledUserTasksByScheduleDate(@RequestParam("date")String date) {
        List<UserTask> userTasks = userTaskService.findScheduledUserTasksByScheduleDate(date);
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }

    //get userTask by id
    @GetMapping("/find/{id}")
    public ResponseEntity<UserTask> getUserTaskById(@PathVariable("id")Long id) {
        UserTask uTask = userTaskService.findUserTaskById(id);
        return new ResponseEntity<>(uTask, HttpStatus.OK);
    }

    //post new userTask
    @PostMapping("/add")
    public ResponseEntity<UserTask> addUserTask(@RequestBody UserTask userTask) {
        UserTask newUserTask = userTaskService.addUserTask(userTask);
        return new ResponseEntity<>(newUserTask, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<UserTask> updateUserTask(@RequestBody UserTask userTask) {
        UserTask updateUserTask = userTaskService.updateUserTask(userTask);
        System.out.println(userTask);
        return new ResponseEntity<>(updateUserTask, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<UserTask> deleteUserTask(@PathVariable("id")Long id) {
         userTaskService.deleteUserTask(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/is-both-lists-empty/{date}")
    public ResponseEntity<Boolean> isBothListsEmpty(@PathVariable("date")String date) {
        boolean empty = userTaskService.findScheduledUserTasksByScheduleDate(date).isEmpty() && userTaskService.findCompletedUserTasksByCompletionDate(date).isEmpty();
        return new ResponseEntity<>(empty, HttpStatus.OK);
    }
}
