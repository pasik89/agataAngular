import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  test: BehaviorSubject<string> = new BehaviorSubject<string>('test')
  test2: Subject<string> = new Subject<string>()
  tabela: Observable<any> = this.getTableData();
  

  constructor(private http: HttpClient) { }

  getTableData(): Observable<any>{
    return this.http.get<any>("http://localhost:3000/applications")

  }
  
}
