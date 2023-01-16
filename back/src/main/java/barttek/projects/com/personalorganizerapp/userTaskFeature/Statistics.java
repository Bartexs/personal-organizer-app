package barttek.projects.com.personalorganizerapp.userTaskFeature;

public class Statistics {
    private int completedTasks;
    private double avgCompletionsPerDay;
    private int maxCompletionsInDay;
    private int percentageOfCompletionOnTime;
    private int timeSpentOnOrganizer;
    private int longestSessionsDuration;

    public Statistics() {
        this.populateStatisticsObject();
    }

    private void populateStatisticsObject() {

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

    public int getPercentageOfCompletionOnTime() {
        return percentageOfCompletionOnTime;
    }

    public void setPercentageOfCompletionOnTime(int percentageOfCompletionOnTime) {
        this.percentageOfCompletionOnTime = percentageOfCompletionOnTime;
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
}
