package barttek.projects.com.personalorganizerapp;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class SingleTask extends TaskGeneral {
    private LocalDate dateDue;
    private boolean markedAsCompleted = false;
    private final List<Tag> tagsList = new ArrayList<>();

    public SingleTask(int id, String name, boolean countTimePerDay, boolean hasSubTasks, LocalDate dateDue) {
        super(id, name, countTimePerDay, hasSubTasks);
        this.dateDue = dateDue;
    }

    public LocalDate getDateDue() {
        return dateDue;
    }

    public void setDateDue(LocalDate dateDue) {
        this.dateDue = dateDue;
    }

    public boolean isMarkedAsCompleted() {
        return markedAsCompleted;
    }

    public void setMarkedAsCompleted(boolean markedAsCompleted) {
        this.markedAsCompleted = markedAsCompleted;
    }

    @Override
    public String toString() {
        return "SingleTask{" +
                "id=" + id +
                "dateDue=" + dateDue +
                ", markedAsCompleted=" + markedAsCompleted +
                ", name='" + name + '\'' +
                '}';
    }
}
