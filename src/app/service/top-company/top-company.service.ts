import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Company} from '../../model/company';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class TopCompanyService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(API_URL + '/company');
  }
}
