package barttek.projects.com.personalorganizerapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class UserTaskService {
    private final UserTaskRepository utr;

    @Autowired
    public UserTaskService(UserTaskRepository utr) {
        this.utr = utr;
        addUserTasks();
    }

    public void addUserTasks() {
        UserTask uTask = new UserTask(1L, "Throw garbage", true, LocalDate.now(), LocalDate.now());
        this.utr.save(uTask);
    }
}
