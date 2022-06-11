import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Skill} from '../../model/skill';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  createSkill(skill: Skill): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/Skill`, skill);
  }

  findAllByCvId(id: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/Skill/cv/${id}`);
  }
}
