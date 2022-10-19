package barttek.projects.com.personalorganizerapp;

import java.time.LocalDate;
import java.util.*;

public class Controller {
    List<Habit> habitsList = new ArrayList<>();
    public Controller(HabitLogger habitLogger) {
    }

    public void runApp() {

        System.out.println(LocalDate.now());

        for(Habit habit : habitsList) {
            System.out.println(habit);
        }

        System.out.println("Chose due date");
        System.out.println("Today is: " + LocalDate.now());
        System.out.println("Input 1 to pass to next day");

        int daysAfterToday = 0;
        boolean working = true;
        LocalDate currentDay = LocalDate.now();

        Scanner scanner = new Scanner(System.in);

        while(working) {
            int decision = Integer.parseInt(scanner.nextLine());

            switch (decision) {
                case 1 -> {
                    daysAfterToday++;
                    currentDay = LocalDate.now().plusDays(daysAfterToday);
                    System.out.println(currentDay);
                }
                case 0 -> working = false;
            }
        }

        for(Habit habit : habitsList) {
            System.out.println(habit);
        }
    }
}
