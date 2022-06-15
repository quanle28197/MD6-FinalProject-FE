import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RecuitmentNew} from '../../model/recuitment-new';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {SearchJob} from '../../model/search-job';
import {Field} from '../../model/field';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class RecruitmentnewService {

  constructor(private http: HttpClient) {
  }

  getAllRecruitmentByField(searchJob: SearchJob): Observable<RecuitmentNew[]> {
    return this.http.post<RecuitmentNew[]>(API_URL + '/recruitment/list', searchJob);
  }

  getAllRecruitment(): Observable<RecuitmentNew[]> {
    return this.http.get<RecuitmentNew[]>(API_URL + '/recruitment/list');
  }

  findById(id: number): Observable<RecuitmentNew> {
    return this.http.get<RecuitmentNew>(`${API_URL}/recruitment/${id}`);
  }

  getAllField(): Observable<Field[]> {
    return this.http.get<Field[]>(`${API_URL}/fields`);
  }
}
