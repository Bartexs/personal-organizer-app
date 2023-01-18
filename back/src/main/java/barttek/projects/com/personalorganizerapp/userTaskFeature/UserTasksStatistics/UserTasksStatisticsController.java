package barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/statistics")
public class UserTasksStatisticsController {

    @Autowired
    UserTasksStatisticsService userTasksStatisticsService;


    @GetMapping("/summary")
    public ResponseEntity<UserTasksStatisticsSummary> completedAmount() {
        UserTasksStatisticsSummary summary = userTasksStatisticsService.getSummary();
        return new ResponseEntity<>(summary, HttpStatus.OK);
    }

    @PostMapping("/timer")
    public ResponseEntity<UserTasksStatisticsSummary> currentSessionTimer(@RequestBody String timeElapsedInMinutes) {
        System.out.println(timeElapsedInMinutes);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
