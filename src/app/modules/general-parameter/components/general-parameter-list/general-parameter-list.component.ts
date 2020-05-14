import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GeneralParameterService } from './../../../../core/services/general-parameter/general-parameter.service';
import { GeneralParameter } from './../../../../core/models/general-parameter/general-parameter';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-general-parameter-list',
  templateUrl: './general-parameter-list.component.html',
  styleUrls: ['./general-parameter-list.component.scss']
})
export class GeneralParameterListComponent implements OnInit {

  pageEvent: PageEvent;
  dataSource = null;
  totalRecords: number;
  page: number;
  pageSize: number;

  displayedColumns: string[] = ['n', 'code', 'name', 'type', 'valueS', 'valueN', 'valueD', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private generalParameterService: GeneralParameterService) { 
    this.dataSource = new MatTableDataSource<GeneralParameter>();
    this.dataSource.paginator = this.paginator;
    this.page = 1;
    this.pageSize = 15;
    this.totalRecords = 0;
  }

  ngOnInit() {
    this.findGeneralParameterList();
  }

  findByPage(event:PageEvent): void {
    this.page = this.page - event.previousPageIndex + event.pageIndex;
    this.pageSize = event.pageSize;
    this.findGeneralParameterList();
  }

  private findGeneralParameterList() : void {
    this.generalParameterService.findAllByPage(this.page, this.pageSize).pipe(take(1)).subscribe(
      response => {
        this.totalRecords = response.pagination.totalRecords;
        this.dataSource = response.searchResultList;
      },
      error => {
  
      });
  }

}
