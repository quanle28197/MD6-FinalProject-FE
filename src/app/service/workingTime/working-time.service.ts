import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {City} from '../../model/city';
import {WorkingTime} from '../../model/workingTime';

@Injectable({
  providedIn: 'root'
})
export class WorkingTimeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  showAll(): Observable<WorkingTime []> {
    return this.http.get<WorkingTime []>(`${this.apiServerUrl}/workingTime/showAll`);
  }
}
