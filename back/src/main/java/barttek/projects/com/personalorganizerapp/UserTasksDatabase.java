package barttek.projects.com.personalorganizerapp;

import barttek.projects.com.personalorganizerapp.userTaskFeature.UserTask;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class UserTasksDatabase {
    private final List<UserTask> userTaskList = new ArrayList<>();

    public UserTasksDatabase() {

    }

    public void addToUserTaskList(UserTask uTask) {
        this.userTaskList.add(uTask);
    }

    public List<UserTask> getWholeUserTaskList() {
        return this.userTaskList;
    }

    public Optional<UserTask> getUserTaskById(int userTaskId) {
        return userTaskList.stream().filter(uTask -> uTask
                        .getId() == userTaskId)
                        .findFirst();
    }

    public void removeUserTaskById(int userTaskId) {
        Optional<UserTask> userTaskOptional = getUserTaskById(userTaskId);
        userTaskOptional.ifPresent(uTask -> uTask = null);
        System.gc();
    }

    public boolean isUserTaskInUserTaskList(int userTaskId) {
        return userTaskList.stream().anyMatch(t -> t.getId() == userTaskId);
    }

    public Stream<UserTask> getCompletedUserTasks() {
        return userTaskList.stream().filter(UserTask::isCompleted);
    }
}
