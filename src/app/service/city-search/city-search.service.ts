import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from '../../model/company';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {RecuitmentNew} from '../../model/recuitment-new';
import {SearchJob} from '../../model/searchJob';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {

  constructor(private http: HttpClient) { }

  getResultJob(data: string): Observable<SearchJob[]> {
    return this.http.get<SearchJob[]>(API_URL + '/search/result?query=' + data);
  }

}
