import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { UserTask } from '../models/UserTask.model';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  constructor(private httpClient: HttpClient) { 

  }

  // POST new user to backend, we set observe to get access to server response, we process it in component using this method
  onPostNewTask(newTask: UserTask) {
    let pathToPost = 'http://localhost:8080/user-task/add'
    newTask.color = this.setDefaultColorIfNotSpecifiedByUser(newTask.color);
    return this.httpClient.post(pathToPost, newTask, {observe: 'response'});
  }

  public setDefaultColorIfNotSpecifiedByUser(color: any) {
    return color == undefined ? "#581845" : color;
  }

  // fetch completed tasks via date
  onFetchCompletedTasksByDate(d: string) {
    // create new http parameters
    const parameters = new HttpParams().set("date", d);
    let pathToGet = 'http://localhost:8080/user-task/completed'
    console.log(d);
    return this.httpClient.get<UserTask[]>(pathToGet, {params: parameters});
  }

  // fetch SCHEDULED tasks via date
  onFetchScheduledTasksByDate(d: string) {
    const parameters = new HttpParams().set("date", d);
    let pathToGet = 'http://localhost:8080/user-task/not-completed'
    return this.httpClient.get<UserTask[]>(pathToGet, {params: parameters});
  }

  // update given userTask
  onUpdateUserTask(updateTask: UserTask) {
    let pathToPut = 'http://localhost:8080/user-task/update'
    return this.httpClient.put<UserTask>(pathToPut, updateTask);
  }

  // delete userTask by id
  deleteUserTask(id: any) {
    let pathToDelete = `http://localhost:8080/user-task/delete/${id}`
    return this.httpClient.delete(pathToDelete);
  }

  // return all scheduled tasks
  onFetchAllScheduledTasks() {
    let pathToGet = `http://localhost:8080/user-task/not-completed`
    return this.httpClient.get<UserTask[]>(pathToGet);
  }
  
  // get usertasks for given day
  onFetchAllUserTasksByDate(date: string) {
    let pathToGet = `http://localhost:8080/user-task/all/` + date;
    return this.httpClient.get<UserTask[]>(pathToGet);
  }

  getIsBothListsEmpty(date: string) {
    let pathToGet = `http://localhost:8080/user-task/is-both-lists-empty/` + date;
    return this.httpClient.get<boolean>(pathToGet);
  }
}
