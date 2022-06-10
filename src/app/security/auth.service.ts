import {Injectable} from '@angular/core';
import {ChangePassword} from '../service/account/changePassword';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SignInForm} from './SignInForm';
import {JwtResponse} from './JwtResponses';
import {Observable} from 'rxjs';

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
