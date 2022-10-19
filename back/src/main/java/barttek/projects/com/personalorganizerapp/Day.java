package barttek.projects.com.personalorganizerapp;

import java.time.LocalDate;

public class Day {
    private final LocalDate day;
    private boolean habitTrained = false;

    //private boolean habitNotOccur;

    public Day(LocalDate dayToCreate) {
        this.day = dayToCreate;
    }

    public Day(LocalDate dayToCreate, boolean habitTrained) {
        this.day = dayToCreate;
        this.habitTrained = habitTrained;
    }

    public LocalDate getLocalDate() {
        return day;
    }

    public boolean isHabitTrained() {
        return habitTrained;
    }

    public void setHabitTrained(boolean habitTrained) {
        this.habitTrained = habitTrained;
    }



    @Override
    public String toString() {
        return "Day{" +
                "day=" + day +
                ", habitTrained=" + habitTrained +
                '}';
    }
}
