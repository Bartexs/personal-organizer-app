package barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics;

import barttek.projects.com.personalorganizerapp.userTaskFeature.UserTaskRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import static org.junit.jupiter.api.Assertions.*;

@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@SpringBootTest
class UserTasksStatisticsBuilderTest {

    @Autowired
    UserTasksStatisticsBuilder userTasksStatisticsBuilder;

    @Test
    void addTimeSpentOnOrganizerAddedZero() {
        UserTasksStatisticsSummary statsSummary = new UserTasksStatisticsSummary();
        int currentTimeSpent = 0;

        statsSummary = this.userTasksStatisticsBuilder.addTimeSpentOnOrganizer(statsSummary, currentTimeSpent);

        int expected = 0;
        int received = statsSummary.getTimeSpentOnOrganizer();
        assertEquals(expected, received);
    }

    @Test
    void addTimeSpentOnOrganizerFromZeroToFiftyMinutes() {
        UserTasksStatisticsSummary statsSummary = new UserTasksStatisticsSummary();
        int currentTimeSpent = 50;

        statsSummary = this.userTasksStatisticsBuilder.addTimeSpentOnOrganizer(statsSummary, currentTimeSpent);

        int expected = 50;
        int received = statsSummary.getTimeSpentOnOrganizer();
        assertEquals(expected, received);
    }

    @Test
    void addTimeSpentOnOrganizerFromFiftyToNinety() {
        UserTasksStatisticsSummary statsSummary = new UserTasksStatisticsSummary();
        int currentTimeSpent = 50;

        statsSummary = this.userTasksStatisticsBuilder.addTimeSpentOnOrganizer(statsSummary, currentTimeSpent);

        currentTimeSpent = 40;
        statsSummary = this.userTasksStatisticsBuilder.addTimeSpentOnOrganizer(statsSummary, currentTimeSpent);

        int expected = 90;
        int received = statsSummary.getTimeSpentOnOrganizer();
        assertEquals(expected, received);
    }
}