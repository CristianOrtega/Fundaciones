import { Component, OnInit } from '@angular/core';
import { ExecutionService } from './../../../../core/services/execution/execution.service';
import { Execution } from './../../../../core/models/execution/execution';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.scss']
})
export class ExecutionComponent implements OnInit {

  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  executionList: Execution[];

  constructor(private executionService: ExecutionService) { 
    this.totalRecords = 0;
    this.pageNumber = 1;
    this.pageSize = 7;
  }

  ngOnInit() {
    this.findExecutionList();
  }

  private findExecutionList(): void {
    this.executionService.findAllByPage(this.pageNumber, this.pageSize).pipe(take(1)).subscribe(
      response => {
        this.totalRecords = response.pagination.totalRecords;
        this.executionList = response.searchResultList;
      },
      error => {
  
      });
  }

}
