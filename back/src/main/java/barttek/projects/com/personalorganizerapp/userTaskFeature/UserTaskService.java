package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserTaskService {
    private final UserTaskRepository userTaskRepository;

    @Autowired
    public UserTaskService(UserTaskRepository userTaskRepository) {
        this.userTaskRepository = userTaskRepository;
    }

    public List<UserTask> findAllScheduledUserTasksWithinScheduledDateRange(String dateFrom, String dateEnd) {
        LocalDate localDate = LocalDate.parse(dateFrom);
        LocalDate localDateEnd = LocalDate.parse(dateEnd);
        return userTaskRepository.findAllScheduledUserTasksWithinScheduledDateRange(localDate, localDateEnd);
    }

    public List<UserTask> findAllCompletedUserTasks() {
        return userTaskRepository.findAllCompletedUserTasks();
    }

    public List<UserTask> findCompletedUserTasksByCompletionDate(String date) {
        //        converts from iso to java localDate format, getting as XXXX-XX-XX
        LocalDate localDate = LocalDate.parse(date);
        return userTaskRepository.findCompletedUserTasksByCompletionDate(localDate);
    }

    public List<UserTask> findAllScheduledUserTasks() {
        return userTaskRepository.findAllScheduledUserTasks();
    }

    public List<UserTask> findScheduledUserTasksByScheduleDate(String date) {
        //        converts from iso to java localDate format, getting as XXXX-XX-XX
        LocalDate localDate = LocalDate.parse(date);
        return userTaskRepository.findScheduledUserTasksByScheduleDate(localDate);
    }

    public UserTask findUserTaskById(Long id) {
        return userTaskRepository.findUserTaskById(id)
                .orElseThrow(() -> new UserNotFoundException("UserTask with id " + id + "not found"));
    }
    public UserTask updateUserTask(UserTask uTask) {
        return userTaskRepository.save(uTask);
    }


    public void deleteUserTask(Long id) {
        userTaskRepository.deleteById(id);
    }

    public UserTask addUserTask(UserTask userTask) {
        return userTaskRepository.save(userTask);
    }

    public List<UserTask> findAll() {
        return userTaskRepository.findAll();
    }
}
