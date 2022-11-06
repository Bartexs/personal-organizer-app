package barttek.projects.com.personalorganizerapp;

import java.time.LocalDate;

public class UserTask {
    private final int id;
    private String name;
    private boolean completed = false;
    private LocalDate dateTaskToBeDone;
    private LocalDate dateTaskCompleted;

    public UserTask(int id, String name, LocalDate dateTaskToBeDone) {
        this.id = id;
        this.name = name;
        this.dateTaskToBeDone = dateTaskToBeDone;
    }

//    generic getters and setters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public LocalDate getDateTaskToBeDone() {
        return dateTaskToBeDone;
    }

    public void setDateTaskToBeDone(LocalDate dateTaskToBeDone) {
        this.dateTaskToBeDone = dateTaskToBeDone;
    }

    public LocalDate getDateTaskCompleted() {
        return dateTaskCompleted;
    }

    public void setDateTaskCompleted(LocalDate dateTaskCompleted) {
        this.dateTaskCompleted = dateTaskCompleted;
    }

    @Override
    public String toString() {
        return "UserTask{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", completed=" + completed +
                ", dateTaskToBeDone=" + dateTaskToBeDone +
                ", dateTaskCompleted=" + dateTaskCompleted +
                '}';
    }
}
