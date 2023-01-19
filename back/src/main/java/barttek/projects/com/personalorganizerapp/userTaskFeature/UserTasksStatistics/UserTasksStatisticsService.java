package barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics;

import barttek.projects.com.personalorganizerapp.security.AuthAppService;
import barttek.projects.com.personalorganizerapp.user.AppUser;
import barttek.projects.com.personalorganizerapp.user.AppUserRepository;
import barttek.projects.com.personalorganizerapp.user.AppUserUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class UserTasksStatisticsService {
    @Autowired
    AuthAppService authAppService;

    @Autowired
    UserTasksStatisticsBuilder userTasksStatisticsBuilder;

    @Autowired
    private AppUserUtility appUserUtility;

    @Autowired
    private AppUserRepository appUserRepository;

    public UserTasksStatisticsSummary getSummary(Long userId) {
        UserTasksStatisticsSummary statsSummary = this.getAppUserStatsSummary(userId);
        LocalDate today = LocalDate.now();
        statsSummary = userTasksStatisticsBuilder.buildSummary(statsSummary, userId, today);
        this.updateAppUserStatisticsSummary(statsSummary, userId);
        return statsSummary;
    }

    public void updateAppUserStatisticsSummary(UserTasksStatisticsSummary statisticsSummary, Long userId) {
        Optional<AppUser> appUser = appUserRepository.findAppUserById(userId);
        AppUser user = appUser.orElseThrow();
        user.setUserTasksStatisticsSummary(statisticsSummary);
        appUserRepository.save(user);
    }


    public void addTotalSessionTimer(Long userId, Integer timeElapsedInMinutes) {
        UserTasksStatisticsSummary statsSummary = this.getAppUserStatsSummary(userId);
        statsSummary = this.userTasksStatisticsBuilder.addTimeSpentOnOrganizer(statsSummary, timeElapsedInMinutes);
        this.updateAppUserStatisticsSummary(statsSummary, userId);
    }

    public void setLongestSessionsDuration(Long userId, Integer timeElapsedInMinutes) {
        UserTasksStatisticsSummary statsSummary = this.getAppUserStatsSummary(userId);
        int currentLongestSessionDuration = statsSummary.getLongestSessionsDuration();

        if(currentLongestSessionDuration < timeElapsedInMinutes) {
            statsSummary.setLongestSessionsDuration(timeElapsedInMinutes);
            this.updateAppUserStatisticsSummary(statsSummary, userId);
        }
    }

    public UserTasksStatisticsSummary getAppUserStatsSummary(Long userId) {
        return appUserRepository.findAppUserById(userId).get().getUserTasksStatisticsSummary();
    }
}
