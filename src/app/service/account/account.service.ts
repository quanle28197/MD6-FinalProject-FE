import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor( private http: HttpClient) { }

  showAll(): Observable<any>{
    return this.http.get(`${this.apiServerUrl}/showAllAccount`);
  }

  changeStatusById(id: number): Observable<any> {
    // @ts-ignore
    return this.http.put(`${this.apiServerUrl}/editStatusAccount/${id}`);
  }
  changeStatusById2(id: number): Observable<any> {
    // @ts-ignore
    return this.http.put(`${this.apiServerUrl}/recruitment/editStatus/${id}`);
  }

  showAllAdminRecruitment(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/recruitment/list`);
  }
}
