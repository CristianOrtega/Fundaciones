import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Enumeration } from './../../models/enumeration/enumeration';
import { SearchResults } from './../../models/response/SearchResults';

@Injectable({
  providedIn: 'root'
})
export class EnumerationService {

  constructor(private http: HttpClient) { 
    
  }

  findAllByPage(pageNumber: number, pageSize: number): Observable<SearchResults<Enumeration>>{
    return this.http.get<any>(`${environment.FND}enumeration-service?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

}
