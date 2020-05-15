import { Component, OnInit, Input } from '@angular/core';
import { Execution } from './../../../../core/models/execution/execution';

@Component({
  selector: 'app-execution-list',
  templateUrl: './execution-list.component.html',
  styleUrls: ['./execution-list.component.scss']
})
export class ExecutionListComponent implements OnInit {

  @Input() execution: Execution;

  constructor() { 

  }

  ngOnInit() {
  }

}
