package barttek.projects.com.personalorganizerapp.userTaskFeature;

public class StatisticsBuilder {


    public StatisticsBuilder() {

    }
    public void buildSummary(Statistics statisticsSummary, Long appUserId) {
        statisticsSummary.setCompletedTasks(this.getCompletedTasksAmount(appUserId));
        statisticsSummary.setAvgCompletionsPerDay(this.getAvgCompletionsPerDay(appUserId));
        statisticsSummary.setLongestSessionsDuration(this.getLongestSessionDuration(appUserId));
        statisticsSummary.setMaxCompletionsInDay(this.getMaxCompletionsInDay(appUserId));
    }

    public int getCompletedTasksAmount(Long appUserId) {

        return 5;
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
