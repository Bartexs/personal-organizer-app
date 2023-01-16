package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class StatisticsBuilder {
    private final UserTaskRepository userTaskRepository;

    @Autowired
    public StatisticsBuilder(UserTaskRepository userTaskRepository) {
        this.userTaskRepository = userTaskRepository;
    }
    public void buildSummary(Statistics statisticsSummary, Long appUserId) {
        statisticsSummary.setCompletedTasks(this.getCompletedTasksAmount(appUserId));
        statisticsSummary.setAvgCompletionsPerDay(this.getAvgCompletionsPerDay(appUserId));
        statisticsSummary.setLongestSessionsDuration(this.getLongestSessionDuration(appUserId));
        statisticsSummary.setMaxCompletionsInDay(this.getMaxCompletionsInDay(appUserId));
    }

    public int getCompletedTasksAmount(Long appUserId) {
        return userTaskRepository.countByAppUser(appUserId);
    }

    public double getAvgCompletionsPerDay(Long appUserId) {
        return 0.0;
    }

    public int getLongestSessionDuration(Long appUserId) {
        return 0;
    }

    public int getMaxCompletionsInDay(Long appUserId) {
        return 0;
    }


}
