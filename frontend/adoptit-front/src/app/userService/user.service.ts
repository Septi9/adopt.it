import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
  private baseURL = "http://localhost:8080/users";
=======
  private baseURL = "https://adopt-backend.azurewebsites.net/users";
>>>>>>> adopts

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
}
