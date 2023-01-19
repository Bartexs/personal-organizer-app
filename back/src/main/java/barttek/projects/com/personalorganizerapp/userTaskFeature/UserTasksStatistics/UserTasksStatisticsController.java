package barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics;

import barttek.projects.com.personalorganizerapp.user.AppUserUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/statistics")
public class UserTasksStatisticsController {

    @Autowired
    UserTasksStatisticsService userTasksStatisticsService;

    @Autowired
    private AppUserUtility appUserUtility;


    @GetMapping("/summary")
    public ResponseEntity<UserTasksStatisticsSummary> summary() {
        Long userId = appUserUtility.getAppUserId();
        UserTasksStatisticsSummary summary = userTasksStatisticsService.getSummary(userId);
        UserTasksStatisticsSummary st = new UserTasksStatisticsSummary();
        return new ResponseEntity<>(summary, HttpStatus.OK);
    }

    @PostMapping("/timer")
    public ResponseEntity<UserTasksStatisticsSummary> currentSessionTimer(@RequestBody String timeElapsedInMinutes) {
        Long userId = appUserUtility.getAppUserId();
        this.userTasksStatisticsService.addTotalSessionTimer(userId, 1);
        this.userTasksStatisticsService.setLongestSessionsDuration(userId, Integer.parseInt(timeElapsedInMinutes));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
