package barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics;

import barttek.projects.com.personalorganizerapp.security.AuthAppService;
import barttek.projects.com.personalorganizerapp.user.AppUser;
import barttek.projects.com.personalorganizerapp.user.AppUserRole;
import barttek.projects.com.personalorganizerapp.userTaskFeature.UserTask;
import barttek.projects.com.personalorganizerapp.userTaskFeature.UserTaskRepository;
import barttek.projects.com.personalorganizerapp.userTaskFeature.UserTaskService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@SpringBootTest
class UserTasksStatisticsServiceTest {

    @BeforeEach
    void setUp() {
        AppUser appUser = new AppUser("someName", "someUsername", "somePassword" , AppUserRole.USER);
        authAppService.registerNewAppUser(appUser);
        LocalDate localDate = LocalDate.of(2022, 10, 10);
        UserTask userTask = new UserTask("someTask", true, localDate, localDate);
        userTask.setAppUserId(1L);
        userTaskService.addUserTask(userTask);
    }

    @Autowired
    private UserTasksStatisticsService userTasksStatisticsService;

    @Autowired
    private AuthAppService authAppService;

    @Autowired
    private UserTaskService userTaskService;

    @Test
    void updateAppUserStatisticsSummary() {
        int expected = 1000;
        UserTasksStatisticsSummary userTasksStatisticsSummary = new UserTasksStatisticsSummary();
        userTasksStatisticsSummary.setCompletedTasks(expected);

        userTasksStatisticsService.updateAppUserStatisticsSummary(userTasksStatisticsSummary, 1L);
        UserTasksStatisticsSummary userTasksStatisticsSummaryAfterChange = userTasksStatisticsService.getAppUserStatsSummary(1L);

        int received = userTasksStatisticsSummaryAfterChange.getCompletedTasks();

        assertEquals(expected, received);
    }

    @Test
    void addCurrentSessionTimer() {
        userTasksStatisticsService.addTotalSessionTimer(1L, 15);
        UserTasksStatisticsSummary userTasksStatisticsSummary = userTasksStatisticsService.getSummary(1L);
        int received = userTasksStatisticsSummary.getTimeSpentOnOrganizer();
        assertEquals(15, received);
    }

    @Test
    void setLongestSessionsDuration() {
//          from 0 to 2minutes session
        int expected = 2;
        userTasksStatisticsService.setLongestSessionsDuration(1L, expected);

        UserTasksStatisticsSummary userTasksStatisticsSummary = userTasksStatisticsService.getAppUserStatsSummary(1L);
        int received = userTasksStatisticsSummary.getLongestSessionsDuration();

        assertEquals(expected, received);

//          from 2 minutes to 10minutes session
        expected = 10;
        userTasksStatisticsService.setLongestSessionsDuration(1L, expected);

        userTasksStatisticsSummary = userTasksStatisticsService.getAppUserStatsSummary(1L);
        received = userTasksStatisticsSummary.getLongestSessionsDuration();

        assertEquals(expected, received);

//          shorter session than previous
        int shorterSession = 6;
        userTasksStatisticsService.setLongestSessionsDuration(1L, shorterSession);

        userTasksStatisticsSummary = userTasksStatisticsService.getAppUserStatsSummary(1L);
        received = userTasksStatisticsSummary.getLongestSessionsDuration();


        assertEquals(expected, received);
    }

}