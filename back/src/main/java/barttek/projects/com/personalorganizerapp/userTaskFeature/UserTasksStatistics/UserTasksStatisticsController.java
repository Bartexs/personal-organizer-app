package barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
