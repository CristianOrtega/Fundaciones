import { Component, OnInit } from '@angular/core';
import { EnumerationService } from './../../../../core/services/enumeration/enumeration.service';
import { Enumeration } from './../../../../core/models/enumeration/enumeration';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-enumeration',
  templateUrl: './enumeration.component.html',
  styleUrls: ['./enumeration.component.scss']
})
export class EnumerationComponent implements OnInit {

  enumerationList: Enumeration[];
  totalRecords: number;
  page: number;
  pageSize: number;

  constructor(private enumerationService: EnumerationService) { 
    this.page = 1;
    this.pageSize = 15;
    this.totalRecords = 0;
  }

  ngOnInit() {
    this.findEnumerationList();
  }

  private findEnumerationList(): void {
    this.enumerationService.findAllByPage(this.page, this.pageSize).pipe(take(1)).subscribe(
    response => {
      debugger;
    },
    error => {

    });
  }

}
