import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Adoptions} from "../adoptions";
import {User} from "../user";



@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  private baseURL = "http://localhost:8080/adoptions";
  private baseURLPost = "http://localhost:8080/adoptions-post";
  // private baseURL = "https://adopt-it.azurewebsites.net/adoptions-post";

  constructor(private http: HttpClient) { }

  getAdoptionsList(): Observable<Adoptions[]> {
    return this.http.get<Adoptions[]>(`${this.baseURL}`);
  }

  create(data): Observable<Adoptions[]> {
    return this.http.post<Adoptions[]>(`${this.baseURLPost}`, data);
  }
}
