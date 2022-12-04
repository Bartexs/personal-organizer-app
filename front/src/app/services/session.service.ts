import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { 

  }

  public sendSessionData() {
    let pathToGet = 'http://localhost:8080/'
    return this.httpClient.get(pathToGet);
  }
}
