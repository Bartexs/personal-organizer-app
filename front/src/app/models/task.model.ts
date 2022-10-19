export interface Task {
    id: number;
    name: string;
    markedAsCompleted: boolean;
    dateDue: string;
    countTimePerDay: boolean;
    hasSubTasks: boolean;
    timeSpentOnTask?: number;
    subTaskMap?: Map<String, Boolean>;
}