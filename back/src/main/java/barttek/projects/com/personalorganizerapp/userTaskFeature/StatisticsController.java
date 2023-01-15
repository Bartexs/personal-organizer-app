package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/statistics")
public class StatisticsController {

    @Autowired
    StatisticsService statisticsService;


    @GetMapping("/summary")
    public ResponseEntity<Statistics> completedAmount() {
        Statistics summary = statisticsService.getSummary();
        return new ResponseEntity<>(summary, HttpStatus.OK);
    }
}
