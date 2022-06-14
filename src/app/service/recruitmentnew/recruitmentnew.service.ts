import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from '../../model/company';
import {RecuitmentNew} from '../../model/recuitment-new';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class RecruitmentnewService {

  constructor(private http: HttpClient) { }

  getAllRecruitment(): Observable<RecuitmentNew[]> {
    return this.http.get<RecuitmentNew[]>(API_URL + '/recruitment/list');
  }

  findById(id: number): Observable<RecuitmentNew> {
    return this.http.get<RecuitmentNew>(`${API_URL}/recruitment/${id}`);
  }
}
