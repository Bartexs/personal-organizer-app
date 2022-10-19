package barttek.projects.com.personalorganizerapp;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping
public class HabitController {
    List<Habit> habitList;

    @GetMapping("habits")
    public List<Habit> getHabitList() {
        populateHabitsList();
        return this.habitList;
    }

    @GetMapping("habit/{id}/days/{amount}")
    public List<Day> nextDays(@PathVariable int id, @PathVariable int amount) {
        List<Day> viewToSend = new ArrayList<>();
        LocalDate today = LocalDate.now();

        Habit e = this.habitList.get(id);
        viewToSend.add(e.getDayByLocalDate(today));

        for(int i = 1; i < amount; i++) {
            viewToSend.add(e.getDayByLocalDate(today.plusDays(i)));
        }
       return viewToSend;
    }

    @PostMapping("habit/updateDay/{id}")
    public HttpStatus updateDayForHabit(@RequestBody Day day, @PathVariable("id") int id) {
        Habit habitToUpdate = this.habitList.get(id);
        //habitToUpdate.setHabitTrained(dayUpdated);
        habitToUpdate.getDayObject(day);

        return HttpStatus.OK;
    }

    public void populateHabitsList() {
        this.habitList = List.of(
                new Habit(1, "Learn programming", false, false),
                new Habit(2, "Feed kitty", false, false),
                new Habit(3, "Write a song", false, false),
                new Habit(4, "Fuck them bitches", true, false));
    }
}
