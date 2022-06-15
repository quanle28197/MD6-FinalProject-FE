import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Skill} from '../../model/skill';
import {Observable} from 'rxjs';
import {WorkExp} from '../../model/workExp';

@Injectable({
  providedIn: 'root'
})
export class WorkExpService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  createWorkExp(workExp: WorkExp): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/WorkExp`, workExp)
  }

  findAllByCvId(id: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/WorkExp/cv/${id}`)
  }
}
