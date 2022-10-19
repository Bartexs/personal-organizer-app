package barttek.projects.com.personalorganizerapp;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping
public class SingleTaskController {
    Map<Integer, SingleTask> singleTasksMap = new HashMap<>();
    List<SingleTask> taskList;
    private int highestGeneratedId = 0;

    //http://localhost:8080/date?amount=10       <- where the amount here is amount down there lol, 0 to get today
    @GetMapping("date")
    public LocalDate nextDay(@RequestParam(value="amount", defaultValue = "0")int amount) {
        return LocalDate.now().plusDays(amount);
    }

    @GetMapping("date/tasks")
    public List<SingleTask> sendTasksForSelectedDay(@RequestParam(value="amount", defaultValue = "0")int amount) {
        List<SingleTask> selectedDayTasks = new ArrayList<>();

        LocalDate dateToFind = LocalDate.now().plusDays(amount);

        if(this.taskList.isEmpty()) {
            return null;
        }

        for(SingleTask task : taskList) {
            if(task.getDateDue().equals(dateToFind)) {
                selectedDayTasks.add(task);
            }
        }

        return selectedDayTasks;
    }

    private int generateSingleTaskId() {
        int randomId = (int)(Math.random() * 10) + this.highestGeneratedId;

        if(this.highestGeneratedId < randomId) this.highestGeneratedId = randomId;

        return randomId;
    }

    @GetMapping("singleTasks/populate")
    public HttpStatus populateSingleTasksList() {

        SingleTask makingDinner = new SingleTask(generateSingleTaskId(), "makingDinner",  true, false, LocalDate.of(2022, 10,8));
        SingleTask makingMoney = new SingleTask(generateSingleTaskId(), "making money", false, false, LocalDate.of(2022, 10,10));
        SingleTask losingShit = new SingleTask(generateSingleTaskId(), "losing Shit",  false, false, LocalDate.of(2022, 10,12));
        SingleTask snoringCoke = new SingleTask(generateSingleTaskId(), "snoringCoke",  false, false, LocalDate.of(2022, 10,12));
        SingleTask takingPills = new SingleTask(generateSingleTaskId(), "taking pills", false, true, LocalDate.of(2022, 10,9));

        snoringCoke.setTimeSpentOnTask(1500);
        takingPills.addToSubTask("Wit D");
        takingPills.addToSubTask("Bioprazol");
        takingPills.addToSubTask("Magnez");

        this.taskList = List.of(makingDinner, makingMoney, losingShit, snoringCoke, takingPills);

        for(SingleTask task : taskList) {
            this.singleTasksMap.put(task.getId(), task);
        }
        return HttpStatus.OK;
    }

    @GetMapping("singleTasks/newId")
    public int generateIdForNewSingleTask() {
        return this.generateSingleTaskId();
    }
}
