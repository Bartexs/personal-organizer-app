package barttek.projects.com.personalorganizerapp.userTaskFeature;


import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
public class UserTask implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Boolean completed;

    private LocalDateTime creationDateTime;
    private LocalDate scheduleDate;
    private LocalDate completionDate;

    private String color;

//    sub task list ????
//    reminder
//    tags


    public UserTask() {
    }

    public UserTask(String name, String description, boolean completed, LocalDate scheduleDate, LocalDate completionDate, String color) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.scheduleDate = scheduleDate;
        this.completionDate = completionDate;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public LocalDateTime getCreationDateTime() {
        return creationDateTime;
    }

    public void setCreationDateTime(LocalDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
    }

    public LocalDate getScheduleDate() {
        return scheduleDate;
    }

    public void setScheduleDate(LocalDate scheduleDate) {
        this.scheduleDate = scheduleDate;
    }

    public LocalDate getCompletionDate() {
        return completionDate;
    }

    public void setCompletionDate(LocalDate completionDate) {
        this.completionDate = completionDate;
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
