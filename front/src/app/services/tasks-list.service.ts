import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task.model'
import { Habit } from '../models/habit.model';

@Injectable({
  providedIn: 'root'
})
export class TasksListService {

  constructor(private http: HttpClient) { 

  }

  onFetchDate(daysFromToday: number) {
    let pathToGet = 'http://localhost:8080/date?amount=' + daysFromToday;
    return this.http.get(pathToGet);
  }

  onFetchTasks(daysFromToday: number) {
    let pathToGet = 'http://localhost:8080/date/tasks?amount=' + daysFromToday;
    return this.http.get<Task[]>(pathToGet)
  }

  onModifyTimeSpentOnTask(timeSpent: {taskId: number, time: number}) {
    let pathToPost = 'http://localhost:8080/addToTaskSpentWorkingTime';
    console.log(timeSpent);
    return this.http.post<{taskId: number, time: number}>;
  }

  onFetchHabits() {
    let pathToGet = 'http://localhost:8080/habits';
    return this.http.get<Habit[]>(pathToGet);
  }

  onFetchHabitFormDays(id: number, amountOfDays: number) {
    id = id - 1;
    let pathToGet = `http://localhost:8080/habit/${id}/days/${amountOfDays}`
    return this.http.get<{day: string, habitTrained: boolean}[]>(pathToGet);
  }

  onPostHabitTrained(id: number, updateDayForHabit: {day: string, habitTrained: boolean}) {
    let pathToPost = `http://localhost:8080/habit/updateDay/${id}`
    console.log(updateDayForHabit);
    console.log(pathToPost);
    return this.http.post(pathToPost, updateDayForHabit).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onCreateNewHabit(habitToCreate: Habit) {
    let pathToPost = `http://localhost:8080/habit/add`
    return this.http.post(pathToPost, habitToCreate).subscribe(responseData => {
      console.log(responseData);
    })
  }

  onInitPopulateSingleTasksList() {
    let pathToGet = 'http://localhost:8080/singleTasks/populate'
    return this.http.get<string>(pathToGet);
  }

  onSetMarkedAsCompleted(taskId: number, value: boolean) {
    let pathToPost = `http://localhost:8080/singleTask/${taskId}/completed/${value}`
  }

  generateIdForNewTask() {
    let pathToGet = 'http://localhost:8080/singleTasks/newId'

    return this.http.get<number>(pathToGet);
  }
}
