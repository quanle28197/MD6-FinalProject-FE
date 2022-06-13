import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SignInForm} from "./SignInForm";
import {Observable} from "rxjs";
import {JwtResponse} from "./JwtResponses";
import {Company} from "../model/company";
import {ChangePassword} from '../service/account/changePassword';
import {RecruitmentNew} from '../model/recruitmentNew';
import {User} from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    signIn(signInForm: SignInForm): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(`${this.apiServerUrl}/signin`, signInForm);
    }

    signUp(signInForm: SignInForm): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}/signup`, signInForm);
    }

    registerCompany(company: Company): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}/company`, company)
    }
    changePassword(changePassword: ChangePassword): Observable<any>{
        return this.http.put(`${this.apiServerUrl}/change-password`,changePassword)
    }
    registerUser(user: User): Observable<any>{
        return this.http.post<any>(`${this.apiServerUrl}/user`,user)
    }
    activeStatus(id: number): Observable<any>{
        return this.http.get(this.apiServerUrl + `/verify/${id}`);
    }
    findById(id: number): Observable<any>{
        return this.http.get(`${this.apiServerUrl}/${id}`)
    }


    
}
