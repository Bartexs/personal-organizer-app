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

    @Query("select u from UserTask u where u.dateTaskToBeDone >= ?1 and u.dateTaskToBeDone <= ?2")
    List<UserTask> findAllUserTasksByDateRange(LocalDate dateTaskToBeDone, LocalDate dateTaskToBeDone1);

    @Query("select u from UserTask u where u.dateTaskToBeDone = ?1 and u.completed = true")
    List<UserTask> findCompletedUserTasksByDate(LocalDate dateTaskToBeDone);

    @Query("select u from UserTask u where u.completed = false and u.dateTaskToBeDone <= ?1")
    List<UserTask> findNotCompletedUserTasksByDate(LocalDate dateTaskToBeDone);

    @Query("select u from UserTask u where u.dateTaskToBeDone <= ?1")
    List<UserTask> findUserTasksByDateTaskToBeDone(LocalDate dateTaskToBeDone);

    @Override
    void deleteById(Long aLong);
}
