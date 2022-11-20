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

    public List<UserTask> findAllUserTasks() {
        return userTaskRepository.findAll();
    }

    public List<UserTask> findAllUserTasksByDateRange(String dateFrom, String dateEnd) {
        LocalDate localDate = LocalDate.parse(dateFrom);
        LocalDate localDateEnd = LocalDate.parse(dateEnd);
        return userTaskRepository.findAllUserTasksByDateRange(localDate, localDateEnd);
    }

    public List<UserTask> findCompletedUserTasks() {
        return userTaskRepository.findUserTasksByCompleted();
    }

    public List<UserTask> findCompletedUserTasksByDate(String date) {
        //        converts from iso to java localDate format, getting as XXXX-XX-XX
        LocalDate localDate = LocalDate.parse(date);
        return userTaskRepository.findCompletedUserTasksByDate(localDate);
    }

    public List<UserTask> findNotCompletedUserTasks() {
        return userTaskRepository.findUserTasksByNotCompleted();
    }

    public List<UserTask> findScheduledUserTasksByDate(String date) {
        //        converts from iso to java localDate format, getting as XXXX-XX-XX
        LocalDate localDate = LocalDate.parse(date);
        return userTaskRepository.findScheduledUserTasksByDate(localDate);
    }

    public List<UserTask> findUserTaskByDate(String date) {
        //        converts from iso to java localDate format, getting as XXXX-XX-XX
        LocalDate localDate = LocalDate.parse(date);
        return userTaskRepository.findUserTasksByDateTaskToBeDone(localDate);
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
}
