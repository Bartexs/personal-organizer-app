package barttek.projects.com.personalorganizerapp;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

public class DayOrganiser {
    private LocalDate date;
    private final Map<Habit, Boolean> habitsMap = new HashMap<>();
    private final Map<SingleTask, Boolean> tasksMap = new HashMap<>();

    public DayOrganiser() {
        
    }
}
