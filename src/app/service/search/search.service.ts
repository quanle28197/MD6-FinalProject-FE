import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RecuitmentNew} from '../../model/recuitment-new';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  getAllJobByField(query: string): Observable<RecuitmentNew[]> {
    return this.http.get<RecuitmentNew[]>(API_URL + '/search?query=' + query);
  }

  getAllJobByCity(query: string): Observable<RecuitmentNew[]> {
    return this.http.get<RecuitmentNew[]>(API_URL + '/city?query' + query);
  }
}
