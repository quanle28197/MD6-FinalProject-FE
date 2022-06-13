import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Field} from '../../model/field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Field []> {
    return this.http.get<Field []>(`${this.apiServerUrl}/fields`);
  }
}
