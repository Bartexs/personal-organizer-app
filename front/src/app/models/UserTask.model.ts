export interface UserTask {
    id?: number;
    name: string;
    description?: string;
    completed: boolean;
    scheduleDate: string,
    completionDate?: string,
    overDueTask?: boolean,
    importantTask: boolean,
    color?: string;
}

                    