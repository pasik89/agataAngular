import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TableService } from '../services/table/table.service';

@Injectable({
  providedIn: 'root'
})
export class TableResolver implements Resolve<any> {
  constructor(private tableService: TableService) {}

  resolve(): Observable<any> {
    return this.tableService.getTableData();
  }
}