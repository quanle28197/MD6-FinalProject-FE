import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apply} from '../../model/apply';
import {environment} from '../../../environments/environment';
import {ChangeStatusApply} from '../../model/changeStatusApply';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  createCV(apply: Apply): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/applies`, apply);
  }

  pageCompany(request, id){
    const params = request;
    return this.http.get(`${this.apiServerUrl}/applies/findAllByCompanyID/${id}`, {params});
  }

  apply(changeStatusApply: ChangeStatusApply): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/applies/changeStatusApply`, changeStatusApply);
  }

  pageApply(nextPage, id: number){
    const params = nextPage;
    return  this.http.get(`${this.apiServerUrl}/applies/showAllApply/${id}`, {params});
  }

}
