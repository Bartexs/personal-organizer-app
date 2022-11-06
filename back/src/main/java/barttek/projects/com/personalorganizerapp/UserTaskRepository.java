package barttek.projects.com.personalorganizerapp;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserTaskRepository extends JpaRepository<UserTask, Long> {

}
