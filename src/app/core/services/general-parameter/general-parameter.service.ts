import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralParameter } from '../../models/general-parameter/general-parameter';
import { SearchResults } from '../../models/response/SearchResults';

@Injectable({
  providedIn: 'root'
})
export class GeneralParameterService {

  constructor(private http: HttpClient) { 
    
  }

  findAllByPage(pageNumber: number, pageSize: number): Observable<SearchResults<GeneralParameter>>{
    return this.http.get<any>(`${environment.FND}generalparameter-service?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
