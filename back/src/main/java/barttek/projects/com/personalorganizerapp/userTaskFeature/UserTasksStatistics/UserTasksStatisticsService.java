package barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics;

import barttek.projects.com.personalorganizerapp.security.AuthAppService;
import barttek.projects.com.personalorganizerapp.user.AppUser;
import barttek.projects.com.personalorganizerapp.user.AppUserUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class UserTasksStatisticsService {
    @Autowired
    AuthAppService authAppService;

    @Autowired
    UserTasksStatisticsBuilder userTasksStatisticsBuilder;

    @Autowired
    private AppUserUtility appUserUtility;

    public UserTasksStatisticsSummary getSummary() {
        Long userId = appUserUtility.getAppUserId();
        UserTasksStatisticsSummary statsSummary = new UserTasksStatisticsSummary();
        LocalDate today = LocalDate.now();
        statsSummary = userTasksStatisticsBuilder.buildSummary(statsSummary, userId, today);

        return statsSummary;
    }
}
