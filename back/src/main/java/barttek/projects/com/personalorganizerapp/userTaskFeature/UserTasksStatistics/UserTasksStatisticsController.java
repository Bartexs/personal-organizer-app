package barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/statistics")
public class UserTasksStatisticsController {

    @Autowired
    UserTasksStatisticsService userTasksStatisticsService;


    @GetMapping("/summary")
    public ResponseEntity<UserTasksStatisticsSummary> summary() {
        UserTasksStatisticsSummary summary = userTasksStatisticsService.getSummary();
        return new ResponseEntity<>(summary, HttpStatus.OK);
    }

    @PostMapping("/timer")
    public ResponseEntity<UserTasksStatisticsSummary> currentSessionTimer(@RequestBody String timeElapsedInMinutes) {
        this.userTasksStatisticsService.addCurrentSessionTimer(Integer.parseInt(timeElapsedInMinutes));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
