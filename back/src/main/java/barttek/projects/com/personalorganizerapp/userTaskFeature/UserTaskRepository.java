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
    List<UserTask> findUserTasksByCompleted();

    @Query("select u from UserTask u where u.completed = false")
    List<UserTask> findUserTasksByNotCompleted();

    @Query("select u from UserTask u where u.scheduleDate >= ?1 and u.scheduleDate <= ?2")
    List<UserTask> findAllUserTasksByDateRange(LocalDate scheduleDate1, LocalDate scheduleDate2);

    @Query("select u from UserTask u where u.completionDate = ?1 and u.completed = true")
    List<UserTask> findCompletedUserTasksByDate(LocalDate completionDate);

    @Query("select u from UserTask u where u.completed = false and u.scheduleDate <= ?1")
    List<UserTask> findNotCompletedUserTasksByDate(LocalDate scheduleDate);

    @Query("select u from UserTask u where u.scheduleDate <= ?1")
    List<UserTask> findUserTasksByDateTaskToBeDone(LocalDate dateTaskToBeDone);

    @Override
    void deleteById(Long aLong);
}
