import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';

import { Execution } from './../../models/execution/execution';
import { SearchResults } from './../../models/response/SearchResults';


@Injectable({
  providedIn: 'root'
})
export class ExecutionService {

  constructor(private http: HttpClient) {

  }

  findAllByPage(pageNumber: number, pageSize: number): Observable<SearchResults<Execution>>{
    return this.http.get<any>(`${environment.FND}execution-service?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

}
