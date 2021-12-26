import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DuckModel } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiUri = "https://localhost:44348/api/Proxy/SearchDuckProxy?query=";
  appeared=0;
  appeared$ = new BehaviorSubject(0);
  constructor(private http: HttpClient) { }

  getDuckSearch(qeury:string) {
    return this.http.get<DuckModel[]>(this.apiUri+qeury);
  }

  changeAppeared(timeAppeared:number){
    this.appeared$.next(this.appeared$.getValue() + timeAppeared);
  }
}
