package barttek.projects.com.personalorganizerapp.userTaskFeature;


import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class UserTask implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Boolean completed;
    private LocalDate dateTaskToBeDone;
    private LocalDate completionDate;

    private String color;

//    private String description;
//    private LocalDate creationDate;
//    private LocalDate scheduleDate;
//    private LocalDate completionDate;
//    sub task list ????
//    reminder
//    tags


    public UserTask() {
    }

    public UserTask(String name, boolean completed, LocalDate dateTaskToBeDone, LocalDate dateTaskCompleted, String color) {
        this.name = name;
        this.completed = completed;
        this.dateTaskToBeDone = dateTaskToBeDone;
        this.completionDate = dateTaskCompleted;
        this.color = color;
//
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
        return completionDate;
    }

    public void setDateTaskCompleted(LocalDate dateTaskCompleted) {
        this.completionDate = dateTaskCompleted;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserTask userTask = (UserTask) o;
        return name.equals(userTask.name) && completed.equals(userTask.completed) && dateTaskToBeDone.equals(userTask.dateTaskToBeDone) && Objects.equals(completionDate, userTask.completionDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, completed, dateTaskToBeDone, completionDate);
    }

    @Override
    public String toString() {
        return "UserTask{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", completed=" + completed +
                ", dateTaskToBeDone=" + dateTaskToBeDone +
                ", dateTaskCompleted=" + completionDate +
                ", color='" + color + '\'' +
                '}';
    }
}
