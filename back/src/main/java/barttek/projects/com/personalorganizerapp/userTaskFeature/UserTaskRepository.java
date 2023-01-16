package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface UserTaskRepository extends JpaRepository<UserTask, Long> {
    Optional<UserTask> findUserTaskById(Long id);

    @Query("select u from UserTask u where u.completed = true")
    List<UserTask> findAllCompletedUserTasks();

    @Query("select u from UserTask u where u.completed = false")
    List<UserTask> findAllScheduledUserTasks();

    @Query("select u from UserTask u where u.scheduleDate >= ?1 and u.scheduleDate <= ?2")
    List<UserTask> findAllScheduledUserTasksWithinScheduledDateRange(LocalDate scheduleDate1, LocalDate scheduleDate2);

    @Query("select u from UserTask u where u.completionDate = ?1 and u.completed = true")
    List<UserTask> findCompletedUserTasksByCompletionDate(LocalDate completionDate);

    @Query("select u from UserTask u where u.completed = false and u.scheduleDate = ?1")
    List<UserTask> findScheduledUserTasksByScheduleDate(LocalDate scheduleDate);

    @Query("SELECT COUNT(u) FROM UserTask u WHERE u.appUserId = ?1 and u.completed = true")
    Integer countByAppUser(Long appUserId);

    @Override
    void deleteById(Long aLong);
}
