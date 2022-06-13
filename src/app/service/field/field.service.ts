import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Field} from '../../model/field';
import {City} from '../../model/city';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  showAll(): Observable<Field []>{
    return this.http.get<Field []>(`${this.apiServerUrl}/fields`);

  }
}
