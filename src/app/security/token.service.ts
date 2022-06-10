import {Injectable} from '@angular/core';
import {JwtResponse} from './JwtResponses';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  public setToken(token: JwtResponse) {
    sessionStorage.setItem('jobToken', JSON.stringify(token));
  }

  public getToken(): JwtResponse {
    try {
      return JSON.parse(sessionStorage.getItem('jobToken'));
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  public getAccountId(): number {
    const token = this.getToken();
    return token ? token.idAccount : 0;
  }

  public getIdGuest(): number {
    const token = this.getToken();
    return token ? token.idGuest : 0;
  }

  public getUsername(): string {
    const token = this.getToken();
    return token ? token.username : '';
  }

  public getTokenKey(): string {
    const token = this.getToken();
    return token ? token.token : '';
  }

  public getRoles(): string[] {
    const roles = [];
    const token = this.getToken();
    if (token) {
      token.roles.forEach(role => {
        roles.push(role.authority);
      });
    }
    return roles;
  }
}
