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
    return this.httpClient.post(pathToPost, newTask, {observe: 'response'});
  }

  // fetch completed tasks via date
  onFetchCompletedTasksByDate(d: string) {
    // create new http parameters
    const parameters = new HttpParams().set("date", d);
    let pathToGet = 'http://localhost:8080/user-task/completed'
    return this.httpClient.get<UserTask[]>(pathToGet, {params: parameters});
  }

  // fetch NOT complted tasks via date
  onFetchNotCompletedTasksByDate(d: string) {
    const parameters = new HttpParams().set("date", d);
    let pathToGet = 'http://localhost:8080/user-task/not-completed'
    return this.httpClient.get<UserTask[]>(pathToGet, {params: parameters});
  }

  // update given userTask
  onUpdateUserTask(updateTask: UserTask) {
    let pathToPut = 'http://localhost:8080/user-task/update'
    return this.httpClient.put<UserTask>(pathToPut, updateTask).subscribe((responseData) => {
      console.log("updated");
    });
  }
}
