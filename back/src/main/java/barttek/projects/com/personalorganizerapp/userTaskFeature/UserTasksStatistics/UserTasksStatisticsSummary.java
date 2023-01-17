package barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics;

public class UserTasksStatisticsSummary {
    private int completedTasks;
    private double avgCompletionsPerDay;
    private int maxCompletionsInDay;
    private double percentageOfCompletionsOnTime;
    private int timeSpentOnOrganizer;
    private int longestSessionsDuration;

    public UserTasksStatisticsSummary() {
    }

    public int getCompletedTasks() {
        return completedTasks;
    }

    public void setCompletedTasks(int completedTasks) {
        this.completedTasks = completedTasks;
    }

    public double getAvgCompletionsPerDay() {
        return avgCompletionsPerDay;
    }

    public void setAvgCompletionsPerDay(double avgCompletionsPerDay) {
        this.avgCompletionsPerDay = avgCompletionsPerDay;
    }

    public int getMaxCompletionsInDay() {
        return maxCompletionsInDay;
    }

    public void setMaxCompletionsInDay(int maxCompletionsInDay) {
        this.maxCompletionsInDay = maxCompletionsInDay;
    }

    public double getPercentageOfCompletionsOnTime() {
        return percentageOfCompletionsOnTime;
    }

    public void setPercentageOfCompletionsOnTime(double percentageOfCompletionsOnTime) {
        this.percentageOfCompletionsOnTime = percentageOfCompletionsOnTime;
    }

    public int getTimeSpentOnOrganizer() {
        return timeSpentOnOrganizer;
    }

    public void setTimeSpentOnOrganizer(int timeSpentOnOrganizer) {
        this.timeSpentOnOrganizer = timeSpentOnOrganizer;
    }

    public int getLongestSessionsDuration() {
        return longestSessionsDuration;
    }

    public void setLongestSessionsDuration(int longestSessionsDuration) {
        this.longestSessionsDuration = longestSessionsDuration;
    }

    @Override
    public String toString() {
        return "Statistics{" +
                "completedTasks=" + completedTasks +
                ", avgCompletionsPerDay=" + avgCompletionsPerDay +
                ", maxCompletionsInDay=" + maxCompletionsInDay +
                ", percentageOfCompletionsOnTime=" + percentageOfCompletionsOnTime +
                ", timeSpentOnOrganizer=" + timeSpentOnOrganizer +
                ", longestSessionsDuration=" + longestSessionsDuration +
                '}';
    }
}
