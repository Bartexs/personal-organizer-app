export interface UserTask {
    id?: number;
    name: string;
    completed: boolean;
    dateTaskToBeDone: string;
    dateTaskCompleted?: string;
    color?: string;
}