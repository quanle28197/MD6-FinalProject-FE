import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ForwardApply} from '../../model/forwardApply';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForwardApplyService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  forwardApply(forwardApply: ForwardApply): Observable<any>{
   return this.http.post(`${this.apiServerUrl}/applies/forward`, forwardApply)
  }
}
