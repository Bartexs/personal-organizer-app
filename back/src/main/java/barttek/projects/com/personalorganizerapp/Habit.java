package barttek.projects.com.personalorganizerapp;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

public class Habit extends TaskGeneral {
    private LocalDate dateHabitCreation;
    private List<Day> monthHabitTrainedList = new ArrayList<>();
    private int latestMonthCreated = 0;

    public Habit(int id, String name, boolean countedTime, boolean hasSubTask) {
        super(id, name, countedTime, hasSubTask);
        dateHabitCreation = LocalDate.now();
    }

    public void setDateHabitCreation(LocalDate dateHabitCreation) {
        this.dateHabitCreation = dateHabitCreation;
    }

    public List<Day> getMonthHabitTrainedList() {
        updateCurrentMonth();
        return monthHabitTrainedList;
    }

    public void setMonthHabitTrainedList(List<Day> monthHabitTrainedList) {
        this.monthHabitTrainedList = monthHabitTrainedList;
    }

    //it creates local dates for each day in current month
    public void updateCurrentMonth() {
        LocalDate today = LocalDate.now();
        int currentMonth = today.getMonthValue();

        if(currentMonth > latestMonthCreated) {
            populateMonth(today);
        }
    }

    public void populateMonth(LocalDate dateOfMonthToPopulate) {
        Month currentMonthAsMonth = dateOfMonthToPopulate.getMonth();
        //check if current year is leap year or not !!!!!!
        int lengthInDaysOfCurrentMonth = currentMonthAsMonth.length(true);
        //based on given date it creates first and last local date in given month
        LocalDate firstDayOfTheMonth = LocalDate.of(dateOfMonthToPopulate.getYear(), dateOfMonthToPopulate.getMonthValue(), 1);
        Day firstDayOfTheMonthDayObject = new Day(firstDayOfTheMonth);
        LocalDate lastDayOfTheMonth = LocalDate.of(dateOfMonthToPopulate.getYear(), dateOfMonthToPopulate.getMonthValue(), lengthInDaysOfCurrentMonth);

        monthHabitTrainedList.add(firstDayOfTheMonthDayObject);
        LocalDate currentDayOfTheMonth = firstDayOfTheMonth;

        while(!currentDayOfTheMonth.equals(lastDayOfTheMonth)) {
            currentDayOfTheMonth = currentDayOfTheMonth.plusDays(1);
            Day currentDayOfTheMonthDayObject = new Day(currentDayOfTheMonth);
            monthHabitTrainedList.add(currentDayOfTheMonthDayObject);
        }
    }

    //occurrenceTypes -> everyday, only week days, only weekend, x times per week, every x days/weeks/months, only certain days (ex. mondays and tuesdays)
    public LocalDate getDateHabitCreation() {
        return dateHabitCreation;
    }
    public void showCurrentMonth() {
        for(Day day : monthHabitTrainedList) {
            System.out.println(day);
        }
    }

    public int getLatestMonthCreated() {

        return latestMonthCreated;
    }

    public void setLatestMonthCreated(int latestMonthCreated) {
        this.latestMonthCreated = latestMonthCreated;
    }

    public Day getDayByLocalDate(LocalDate date) {
        for(Day item : this.monthHabitTrainedList) {
            if(item.getLocalDate().equals(date)) {
                return item;
            }
        }
        return null;
    }

    public void getDayObject(Day day) {
        for(Day d : monthHabitTrainedList) {
            if(d.getLocalDate().equals(day.getLocalDate())) {
                d.setHabitTrained(d.isHabitTrained());
            }
        }
    }

    @Override
    public String toString() {
        return "Habit{" +
                "dateHabitCreation=" + dateHabitCreation +
                ", monthHabitTrainedList=" + monthHabitTrainedList +
                ", latestMonthCreated=" + latestMonthCreated +
                ", name='" + name + '\'' +
                '}';
    }
}
