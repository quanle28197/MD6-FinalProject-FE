import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WorkingTime} from '../../model/workingTime';

@Injectable({
  providedIn: 'root'
})
export class WorkingTimeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  showAll(): Observable<WorkingTime []> {
    return this.http.get<WorkingTime []>(`${this.apiServerUrl}/workingTime/showAll`)
  }
}
