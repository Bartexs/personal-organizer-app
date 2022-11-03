package barttek.projects.com.personalorganizerapp;

public class UserTask {
    private int id;
    private String name;
    private boolean completed = false;

    public UserTask(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    @Override
    public String toString() {
        return "UserTask{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", completed=" + completed +
                '}';
    }
}
