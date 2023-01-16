package barttek.projects.com.personalorganizerapp.userTaskFeature;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@SpringBootTest
class StatisticsBuilderTest {
    @Autowired
    private UserTaskRepository userTaskRepository;

    @BeforeEach
    void setUp() {
        LocalDate scheduleDate = LocalDate.of(2022, 11,10);
        LocalDate completionDate = scheduleDate.plusDays(2);

        UserTask fTask = new UserTask("first task", false,scheduleDate, null);
        fTask.setAppUserId(2L);
        userTaskRepository.save(fTask);

        UserTask sTask = new UserTask("second task", true,scheduleDate, completionDate);
        sTask.setAppUserId(2L);
        userTaskRepository.save(sTask);


        UserTask tTask = new UserTask("third task", false,scheduleDate, null);
        tTask.setAppUserId(2L);
        userTaskRepository.save(tTask);
    }

    @Test
    void buildSummary() {

    }

    @Test
    void getCompletedTasksAmount() {
        int completedUserTasksCounter = userTaskRepository.countByAppUser(2L);
        assertEquals(1, completedUserTasksCounter);
    }

    @Test
    void getAvgCompletionsPerDay() {
//        amount of days = last completion date - first schedule date
        int amountOfDaysUsing = 3;

        int completedUserTasksCounter = userTaskRepository.countByAppUser(2L);
        double avgCompletedPerDay = (double) completedUserTasksCounter / amountOfDaysUsing;

        assertEquals(0.3333333333333333, avgCompletedPerDay);
    }

    @Test
    void getLongestSessionDuration() {
        fail();
    }

    @Test
    void getMaxCompletionsInDay() {
        int maxOccurrence = 0;
        LocalDate maxLocalDate;

        Stream<UserTask> userTaskStream = userTaskRepository.findAllCompletedUserTasksByAppUserId(2L).stream();
        List<LocalDate> localDatesWithCompletedTasks = userTaskStream
                .map(UserTask::getCompletionDate)
                .toList();

        HashMap<LocalDate, Integer> localDateIntegerHashMap = new HashMap<>();

        for(LocalDate day : localDatesWithCompletedTasks) {
            Integer counter = localDateIntegerHashMap.get(day);
            counter = (counter == null) ? 1 : counter + 1;
            localDateIntegerHashMap.put(day, counter);
            if(maxOccurrence < counter) {
                maxLocalDate = day;
                maxOccurrence = counter;
            }
        }
        
        for (Map.Entry<LocalDate, Integer> val : localDateIntegerHashMap.entrySet()) {
            System.out.println("Element " + val.getKey() + " "
                    + "occurs"
                    + ": " + val.getValue() + " times");
        }

        assertEquals(1, maxOccurrence);
    }
}