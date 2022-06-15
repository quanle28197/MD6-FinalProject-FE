import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {Company} from "../../model/company";
import {EditCompany} from '../../model/editCompany';

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


