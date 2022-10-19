package barttek.projects.com.personalorganizerapp;

import java.util.HashMap;
import java.util.Map;

public class TaskGeneral {

    public int id;
    private int customSortingPlace;
    protected String name;

    private boolean countTimePerDay;
    private boolean hasSubTasks;
    private int timeSpentOnTask;
    private Map<String, Boolean> subTaskMap = new HashMap<>();

    public TaskGeneral(int id, String name, boolean countTimePerDay, boolean hasSubTasks) {
        this.id = id;
        this.name = name;
        this.countTimePerDay = countTimePerDay;
        this.hasSubTasks = hasSubTasks;
    }

    public void addToSubTask(String subTask) {
        if(hasSubTasks) {
            subTaskMap.put(subTask, false);
        }
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCustomSortingPlace() {
        return customSortingPlace;
    }

    public void setCustomSortingPlace(int customSortingPlace) {
        this.customSortingPlace = customSortingPlace;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCountTimePerDay() {
        return countTimePerDay;
    }

    public void setCountTimePerDay(boolean countTimePerDay) {
        this.countTimePerDay = countTimePerDay;
    }

    public int getTimeSpentOnTask() {
        return timeSpentOnTask;
    }

    public void setTimeSpentOnTask(int timeSpentOnTask) {
        this.timeSpentOnTask = timeSpentOnTask;
    }

    public boolean isHasSubTasks() {
        return hasSubTasks;
    }

    public void setHasSubTasks(boolean hasSubTasks) {
        this.hasSubTasks = hasSubTasks;
    }

    public Map<String, Boolean> getSubTaskMap() {
        return subTaskMap;
    }

    public void setSubTaskMap(Map<String, Boolean> subTaskMap) {
        this.subTaskMap = subTaskMap;
    }

    public int generateNewId() {

        return -1;
    }
}
