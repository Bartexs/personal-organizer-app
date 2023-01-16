package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@SpringBootTest
class StatisticsBuilderTest {

    @BeforeEach
    void setUp() {

    }

    @Test
    void buildSummary() {
    }

    @Test
    void getCompletedTasksAmount() {
    }

    @Test
    void getAvgCompletionsPerDay() {
    }

    @Test
    void getLongestSessionDuration() {
    }

    @Test
    void getMaxCompletionsInDay() {
    }
}