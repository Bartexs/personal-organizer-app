package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/user-task")
public class UserTaskResource {
    private final UserTaskService userTaskService;

    public UserTaskResource(UserTaskService userTaskService) {
        this.userTaskService = userTaskService;
    }

//    maybe make universal method with getting statuses and setting it as variable to choose
    //    @GetMapping("/{status}/{date}")
//    public ResponseEntity<List<UserTask>> findByStatusAndDate(@PathVariable("status") String status, @PathVariable("date")String date) {
//
//    }

    //get userTasks ALL
    @GetMapping("/all")
    public ResponseEntity<List<UserTask>> getAllUserTasks() {
        List<UserTask> userTasks = userTaskService.findAllUserTasks();
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }

    //get userTask by date ALL
    @GetMapping("/all/{date}")
    public ResponseEntity<List<UserTask>> getUserTaskByDate(@PathVariable("date")String date) {
        List<UserTask> userTasks = userTaskService.findUserTaskByDate(date);
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }

    //get userTask from date to date
    @GetMapping("/all/{date-from}/{date-end}")
    public ResponseEntity<List<UserTask>> getUserTasksTasksByDateRange(@PathVariable("date-from") String dateFrom, @PathVariable("date-end") String dateEnd) {
        List<UserTask> userTasks = userTaskService.findAllUserTasksByDateRange(dateFrom, dateEnd);
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }

    //get all completed tasks <- archive
    @GetMapping("/completed")
    public ResponseEntity<List<UserTask>> findCompletedUserTasks() {
        List<UserTask> userTasks = userTaskService.findCompletedUserTasks();
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }

    @GetMapping("/not-completed")
    public ResponseEntity<List<UserTask>> findNotCompletedUserTasks() {
        List<UserTask> userTasks = userTaskService.findNotCompletedUserTasks();
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }
    //get userTask by date but COMPLETED
    @RequestMapping(
            value = "/completed",
            params = { "date" },
            method = GET
    )
    public ResponseEntity<List<UserTask>> findCompletedUserTasksByDate(@RequestParam("date")String date) {
        List<UserTask> userTasks = userTaskService.findCompletedUserTasksByDate(date);
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }

    //get userTask by date but NOT COMPLETED
    @RequestMapping(
            value = "/not-completed",
            params = { "date" },
            method = GET
    )
    public ResponseEntity<List<UserTask>> findNotCompletedUserTasksByDate(@RequestParam("date")String date) {
        List<UserTask> userTasks = userTaskService.findNotCompletedUserTasksByDate(date);
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
        return new ResponseEntity<>(updateUserTask, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<UserTask> deleteUserTask(@PathVariable("id")Long id) {
         userTaskService.deleteUserTask(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
