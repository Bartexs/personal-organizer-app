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
    private LocalDate dateTaskCompleted;


    public UserTask() {
    }

    public UserTask(Long id, String name, boolean completed, LocalDate dateTaskToBeDone, LocalDate dateTaskCompleted) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.dateTaskToBeDone = dateTaskToBeDone;
        this.dateTaskCompleted = dateTaskCompleted;
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
        return dateTaskCompleted;
    }

    public void setDateTaskCompleted(LocalDate dateTaskCompleted) {
        this.dateTaskCompleted = dateTaskCompleted;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserTask userTask = (UserTask) o;
        return id.equals(userTask.id) && name.equals(userTask.name) && completed.equals(userTask.completed) && dateTaskToBeDone.equals(userTask.dateTaskToBeDone) && Objects.equals(dateTaskCompleted, userTask.dateTaskCompleted);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, completed, dateTaskToBeDone, dateTaskCompleted);
    }
}
