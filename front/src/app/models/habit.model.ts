export interface Habit {
    id: number;
    name: string;
    countTimePerDay: boolean;
    hasSubTasks: boolean;
    monthHabitTrainedList: {day: string, habitTrained: boolean}[];
    latestMonthCreated: number;
    timeSpentOnTask?: number;
    subTaskMap?: Map<String, Boolean>;
    dateHabitCreation?: string;
}