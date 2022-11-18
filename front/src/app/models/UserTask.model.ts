export interface UserTask {
    id?: number;
    name: string;
    completed: boolean;
    dateTaskToBeDone: string;
    completionDate?: string;
    color?: string;
}