package barttek.projects.com.personalorganizerapp;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

public class UserTaskExtended extends UserTask {

//    class properties
    private String description;
    private List<UserTask> subTasksList;
    private List<Tag> tagsList;

    public UserTaskExtended(Builder builder) {
        super(builder.id, Objects.requireNonNull(builder.name), builder.dateTaskToBeDone);
        this.description = builder.description;
        this.subTasksList = builder.subTasksList;
        this.tagsList = builder.tagsList;
    }

//    generic getters and setters
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<UserTask> getSubTasksList() {
        return subTasksList;
    }

    public void setSubTasksList(List<UserTask> subTasksList) {
        this.subTasksList = subTasksList;
    }

    public List<Tag> getTagsList() {
        return tagsList;
    }

    public void setTagsList(List<Tag> tagsList) {
        this.tagsList = tagsList;
    }

//    created builder class to allow creating object without certain fields if needed
    public static Builder newBuilder(int id, String name, LocalDate dateTaskToBeDone) {
        return new Builder(id, name, dateTaskToBeDone);
    }

    static final class Builder {
        private final int id;
        private final String name;
        private LocalDate dateTaskToBeDone;
        private String description;
        private List<UserTask> subTasksList;
        private List<Tag> tagsList;

        private Builder(int id, String name, LocalDate dateTaskToBeDone) {
            this.id = id;
            this.name = name;
            this.dateTaskToBeDone = dateTaskToBeDone;
        }
        public Builder withDescription(String val) {
            description = val;
            return this;
        }

        public Builder withSubTasksList(List<UserTask> val) {
            subTasksList = val;
            return this;
        }

        public Builder withTagsList(List<Tag> val) {
            tagsList = val;
            return this;
        }

        public UserTaskExtended build() {
            return new UserTaskExtended(this);
        }
    }

//    custom methods
    public void addingToSubTasksList(UserTask uTask) {
        this.subTasksList.add(uTask);
    }

    public boolean isUserTaskPresentInSubTasksListByUserTaskId(int userTaskId) {
        return subTasksList.stream().anyMatch(t -> t.getId() == userTaskId);
    }

    public void gettingFromSubTasksList(int userTaskId) {
        Optional<UserTask> matchingUserTask = subTasksList.stream().filter(uTask -> uTask
                .getId() == userTaskId)
                .findFirst();
    }
}
