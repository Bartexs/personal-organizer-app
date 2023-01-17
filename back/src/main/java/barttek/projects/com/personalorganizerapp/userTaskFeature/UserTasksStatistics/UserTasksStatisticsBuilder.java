package barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics;

import barttek.projects.com.personalorganizerapp.userTaskFeature.UserTask;
import barttek.projects.com.personalorganizerapp.userTaskFeature.UserTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

import static java.time.temporal.ChronoUnit.DAYS;

@Component
public class UserTasksStatisticsBuilder {
    private final UserTaskRepository userTaskRepository;

    @Autowired
    public UserTasksStatisticsBuilder(UserTaskRepository userTaskRepository) {
        this.userTaskRepository = userTaskRepository;
    }
    public UserTasksStatisticsSummary buildSummary(UserTasksStatisticsSummary userTasksStatisticsSummarySummary, Long appUserId, LocalDate summaryLastDate) {
        userTasksStatisticsSummarySummary.setCompletedTasks(this.getCompletedTasksAmount(appUserId));
        userTasksStatisticsSummarySummary.setAvgCompletionsPerDay(this.getAvgCompletionsPerDay(appUserId, summaryLastDate));
        userTasksStatisticsSummarySummary.setLongestSessionsDuration(this.getLongestSessionDuration(appUserId));
        userTasksStatisticsSummarySummary.setMaxCompletionsInDay(this.getMaxCompletionsInDay(appUserId));
        userTasksStatisticsSummarySummary.setPercentageOfCompletionsOnTime(this.getPercentageOfCompletionsOnTime(appUserId));
        userTasksStatisticsSummarySummary.setTimeSpentOnOrganizer(this.getTimeSpentOnOrganizer(appUserId));

        return userTasksStatisticsSummarySummary;
    }

    public int getCompletedTasksAmount(Long appUserId) {
        return userTaskRepository.countByAppUser(appUserId);
    }

    public double getAvgCompletionsPerDay(Long appUserId, LocalDate lastDayToCount) {
        int completedUserTasksCounter = userTaskRepository.countByAppUser(appUserId);
        LocalDate firstTaskScheduled = this.getFirstTaskCreationDate(appUserId);
        long amountOfDaysUsing = this.amountOfDaysBetweenLocalDates(firstTaskScheduled, lastDayToCount);

        if (amountOfDaysUsing == 0) {
            amountOfDaysUsing = 1;
        }
        return (double) completedUserTasksCounter / amountOfDaysUsing;
    }

    public LocalDate getFirstTaskCreationDate(Long appUserId) {
        List<UserTask> userTaskList = userTaskRepository.findAllUserTasksByAppUserId(appUserId, Sort.by(Sort.Direction.DESC, "creationDateTime"));
        return userTaskList.get(0).getScheduleDate();
    }

    public long amountOfDaysBetweenLocalDates(LocalDate beginningDate, LocalDate endingDate) {
        return DAYS.between(beginningDate, endingDate);
    }

    public int getLongestSessionDuration(Long appUserId) {
        return 0;
    }

    public int getTimeSpentOnOrganizer(Long appUserId) {
        return 0;
    }

    public int getMaxCompletionsInDay(Long appUserId) {
        int maxOccurrence = 0;
        LocalDate maxLocalDate;

        Stream<UserTask> userTaskStream = userTaskRepository.findAllCompletedUserTasksByAppUserId(appUserId).stream();
        List<LocalDate> localDatesWithCompletedTasks = userTaskStream
                .map(UserTask::getCompletionDate)
                .toList();

        HashMap<LocalDate, Integer> localDateIntegerHashMap = new HashMap<>();

        for(LocalDate day : localDatesWithCompletedTasks) {
            Integer counter = localDateIntegerHashMap.get(day);
            counter = (counter == null) ? 1 : counter + 1;
            localDateIntegerHashMap.put(day, counter);
            if(maxOccurrence < counter) {
                maxLocalDate = day;
                maxOccurrence = counter;
            }
        }
        return maxOccurrence;
    }

    public double getPercentageOfCompletionsOnTime(Long appUserId) {
        return 0.0;
    }
}
