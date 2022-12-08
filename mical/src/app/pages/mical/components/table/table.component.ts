import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, filter, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { TableService } from '../../services/table/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  tableDatas: Observable<any[]> = this.tableService.getTableData();
  // tableDatas: any[] = this.activatedRoute.snapshot.data['tableData'];

  testowa: BehaviorSubject<string> = this.tableService.test;
  testowa2: Subject<string> = this.tableService.test2;
  dupa: Observable<any> = this.tableService.tabela;

  unsubcribe: Subject<boolean> = new Subject<boolean>;

  constructor(
    private tableService: TableService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute)
    // this.tableService.getTableData().pipe(
    //     // takeUntil(this.unsubcribe),
    //     // take(3)
    // ).subscribe();

    // console.log(this.dupa)
  }

  ngOnDestroy(): void {
    this.unsubcribe.next(true);
    this.unsubcribe.complete();
  }

  changeText() {
    this.testowa.next('z tabeli')
    this.testowa2.next('z Subject')
  }

}
