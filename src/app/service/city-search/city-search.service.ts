import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from '../../model/company';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {RecuitmentNew} from '../../model/recuitment-new';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {

  constructor(private http: HttpClient) { }

  // searchCity(): Observable<RecuitmentNew[]> {
  //   return this.http.get<RecuitmentNew[]>(API_URL + '/search/q-search/city');
  // }
}
