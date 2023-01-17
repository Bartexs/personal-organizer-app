package barttek.projects.com.personalorganizerapp.userTaskFeature;

import static java.time.temporal.ChronoUnit.DAYS;
import static org.junit.jupiter.api.Assertions.*;

import barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics.UserTasksStatisticsBuilder;
import barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics.UserTasksStatisticsSummary;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import java.time.LocalDate;

@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@SpringBootTest
class UserTasksStatisticsSummaryBuilderTest {
    @Autowired
    private UserTaskRepository userTaskRepository;

    @Autowired
    UserTasksStatisticsBuilder userTasksStatisticsBuilder;

    @BeforeEach
    void setUp() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask fTask = new UserTask("first task", false,scheduleDate, null);
        fTask.setCreationDateTime(scheduleDate.atStartOfDay());
        fTask.setAppUserId(2L);
        userTaskRepository.save(fTask);

        UserTask sTask = new UserTask("second task", true,scheduleDate, completionDate);
        sTask.setCreationDateTime(scheduleDate.atStartOfDay());
        sTask.setAppUserId(2L);
        userTaskRepository.save(sTask);


        UserTask tTask = new UserTask("third task", false,scheduleDate, null);
        tTask.setCreationDateTime(scheduleDate.atStartOfDay());
        tTask.setAppUserId(2L);
        userTaskRepository.save(tTask);
    }

    @Test
    void buildSummary() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);
        UserTasksStatisticsSummary userTasksStatisticsSummarySummary = new UserTasksStatisticsSummary();

        System.out.println(userTasksStatisticsBuilder.buildSummary(userTasksStatisticsSummarySummary, 2L, completionDate));
    }

    @Test
    void getCompletedTasksAmount() {
        int completedUserTasksCounter = userTasksStatisticsBuilder.getCompletedTasksAmount(2L);
        assertEquals(1, completedUserTasksCounter);
    }

    @Test
    void getAvgCompletionsPerDay() {
//        amount of days = last completion date - first schedule date
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        System.out.println(DAYS.between(scheduleDate, completionDate));

        double avgCompletedPerDay = userTasksStatisticsBuilder.getAvgCompletionsPerDay(2L, completionDate);

        assertEquals(0.5, avgCompletedPerDay);
    }

    @Test
    void getAvgCompletionsPerDayMoreDaysAndTasks() {
//        amount of days = last completion date - first schedule date
        LocalDate firstDate = LocalDate.of(2022, 11,10);

        for(int plusDays = 1; plusDays < 7; plusDays++) {
            String taskName = plusDays + "task";
            UserTask tTask = new UserTask(taskName, true, firstDate.plusDays(plusDays), firstDate.plusDays(plusDays));
            tTask.setAppUserId(2L);
            tTask.setCreationDateTime(firstDate.atStartOfDay());
            userTaskRepository.save(tTask);
            System.out.println(tTask);
        }

        System.out.println("Number of days:" + userTasksStatisticsBuilder.amountOfDaysBetweenLocalDates(firstDate, firstDate.plusDays(6)));
        System.out.println("Number of tasks in db:" + userTasksStatisticsBuilder.getCompletedTasksAmount(2L));
        System.out.println(firstDate.plusDays(6));

        double avgCompletedPerDay = userTasksStatisticsBuilder.getAvgCompletionsPerDay(2L, firstDate.plusDays(6));

        assertEquals(1.1666666666666667, avgCompletedPerDay);
    }

    @Test
    void getFirstTaskCreationDate() {
        LocalDate expected = LocalDate.of(2022, 11,10);

        LocalDate given = userTasksStatisticsBuilder.getFirstTaskCreationDate(2L);

        assertEquals(expected, given);
    }

    @Test
    void getLongestSessionDuration() {
        fail();
    }

    @Test
    void getMaxCompletionsInDay() {
        int maxOccurrence = userTasksStatisticsBuilder.getMaxCompletionsInDay(2L);
        assertEquals(1, maxOccurrence);
    }
}