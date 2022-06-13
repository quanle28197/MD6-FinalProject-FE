import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {SignInForm} from "../../security/SignInForm";
import {Observable} from "rxjs";
import {JwtResponse} from "../../security/JwtResponses";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from "../../model/company";
import {RecruitmentNew} from "../../model/recruitmentNew";
import {EditCompany} from '../../model/editCompany';
import {Field} from '../../model/field';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) {
  }

  getCompanyNameById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiServerUrl}/company/${id}`);
  }

  editCompany(id: number, company: EditCompany) {
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json','Access-Control-Allow-Origins':'*'})};
    // @ts-ignore
    return this.http.put(`${this.apiServerUrl}/company/${id}`, company)
  }

  getAllCompany(): Observable<Company []> {
    return this.http.get<Company []>(`${this.apiServerUrl}/company/list`)
  }
  fidAllCompanyByStatus(status: number): Observable<Company []>{
    return this.http.get<Company []>(`${this.apiServerUrl}/company/findByStatus/${status}`);
  }
  findByRecuitmentNewNeed(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/company/findByRecuitmentNewNeed`);
  }
}


