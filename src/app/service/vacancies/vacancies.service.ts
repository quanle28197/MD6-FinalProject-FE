import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vacancies} from '../../model/vacancies';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  showAll(): Observable<Vacancies []> {
    return this.http.get<Vacancies []>(`${this.apiServerUrl}/vacancies/showAll`);
  }
}
