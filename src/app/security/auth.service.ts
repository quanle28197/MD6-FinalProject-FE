import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SignInForm} from './SignInForm';
import {Observable} from 'rxjs';
import {ResponseBody} from '../model/response-body';
import {Company} from '../model/company';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    signIn(signInForm: SignInForm): Observable<ResponseBody> {
        return this.http.post<ResponseBody>(`${this.apiServerUrl}/signin`, signInForm);
    }

    registerCompany(company: Company): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/company`, company);
    }

    signUp(signInForm: SignInForm): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}/signup`, signInForm);
    }

    registerUser(user: User): Observable<any>{
        return this.http.post<any>(`${this.apiServerUrl}/user`, user);
    }
    activeStatus(id: number): Observable<any>{
        return this.http.get(this.apiServerUrl + `/verify/${id}`);
    }
    findById(id: number): Observable<any>{
        return this.http.get(`${this.apiServerUrl}/${id}`);
    }



}
