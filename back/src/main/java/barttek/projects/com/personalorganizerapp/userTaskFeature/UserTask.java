package barttek.projects.com.personalorganizerapp.userTaskFeature;


import barttek.projects.com.personalorganizerapp.user.AppUser;
import org.hibernate.annotations.Filter;
import org.hibernate.annotations.FilterDef;
import org.hibernate.annotations.ParamDef;
import org.springframework.cglib.core.Local;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@FilterDef(name = "appUserFilter", parameters = @ParamDef( name="orgId", type="long" ))
@Filter(name = "appUserFilter", condition = "app_user_id=:orgId")
@Entity
@Table(name="UserTasks")
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
    private Boolean overDueTask;
    private Boolean importantTask;
    private String color;

    private Long appUserId;

    public Long getAppUserId() {
        return appUserId;
    }

    public void setAppUserId(Long appUserId) {
        this.appUserId = appUserId;
    }

    //    create StatisticsLogger, create is as interface and then use it for habits goals etc.
//    sub task list ????
//    reminder
//    tags


    public UserTask() {
    }

    public UserTask(String name,
                    Boolean completed,
                    LocalDate scheduleDate,
                    LocalDate completionDate) {

        this.name = name;
        this.completed = completed;
        this.creationDateTime = LocalDateTime.now();
        this.scheduleDate = scheduleDate;
        this.completionDate = completionDate;
    }

    public UserTask(String name,
                    String description,
                    Boolean completed,
                    LocalDate scheduleDate,
                    LocalDate completionDate,
                    Boolean overDueTask,
                    Boolean importantTask,
                    String color) {

        this.name = name;
        this.description = description;
        this.completed = completed;
        this.creationDateTime = LocalDateTime.now();
        this.scheduleDate = scheduleDate;
        this.completionDate = completionDate;
        this.overDueTask = overDueTask;
        this.importantTask = importantTask;
        this.color = color;
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

    public Boolean getOverDueTask() {
        return overDueTask;
    }

    public void setOverDueTask(Boolean overDueTask) {
        this.overDueTask = overDueTask;
    }

    public Boolean getImportantTask() {
        return importantTask;
    }

    public void setImportantTask(Boolean importantTask) {
        this.importantTask = importantTask;
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
        return id.equals(userTask.id) && name.equals(userTask.name) && Objects.equals(description, userTask.description) && completed.equals(userTask.completed) && scheduleDate.equals(userTask.scheduleDate) && Objects.equals(completionDate, userTask.completionDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, completed, scheduleDate, completionDate);
    }

    @Override
    public String toString() {
        return "UserTask{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", completed=" + completed +
                ", creationDateTime=" + creationDateTime +
                ", scheduleDate=" + scheduleDate +
                ", completionDate=" + completionDate +
                ", overDueTask=" + overDueTask +
                ", importantTask=" + importantTask +
                ", color='" + color + '\'' +
                '}';
    }
}
