import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EnumerationService } from './../../../../core/services/enumeration/enumeration.service';
import { Enumeration } from './../../../../core/models/enumeration/enumeration';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-enumeration-list',
  templateUrl: './enumeration-list.component.html',
  styleUrls: ['./enumeration-list.component.scss']
})
export class EnumerationListComponent implements OnInit {

  pageEvent: PageEvent;
  dataSource = null;
  totalRecords: number;
  page: number;
  pageSize: number;

  displayedColumns: string[] = ['n', 'type', 'code', 'description', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private enumerationService: EnumerationService) { 
    this.dataSource = new MatTableDataSource<Enumeration>();
    this.dataSource.paginator = this.paginator;
    this.page = 1;
    this.pageSize = 15;
    this.totalRecords = 0;
  }

  ngOnInit() {
    this.findEnumerationList();
  }

  findByPage(event:PageEvent): void {
    this.page = this.page - event.previousPageIndex + event.pageIndex;
    this.pageSize = event.pageSize;
    this.findEnumerationList();
  }

  private findEnumerationList(): void {
    this.enumerationService.findAllByPage(this.page, this.pageSize).pipe(take(1)).subscribe(
    response => {
      this.totalRecords = response.pagination.totalRecords;
      this.dataSource = response.searchResultList;
    },
    error => {

    });
  }

}
