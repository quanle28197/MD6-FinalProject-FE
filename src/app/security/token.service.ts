import { Injectable } from '@angular/core';
const ID_ACCOUNT = 'Id_Account';
const ID_GUEST = 'Id_Guest';
const USERNAME_KEY = 'Username_Key';
const TOKEN_KEY = 'Token_Key';
const ROLE_KEY = 'Role_Key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setIdAccount(id: number){

    window.sessionStorage.removeItem(String(id));

    window.sessionStorage.setItem(ID_ACCOUNT, String(id));
  }
  public getIdAccount(): number {
    // @ts-ignore
    return window.sessionStorage.getItem(ID_ACCOUNT);
  }

  public setIdGuest(id: number){
    // @ts-ignore
    window.sessionStorage.removeItem(id);
    // @ts-ignore
    window.sessionStorage.setItem(ID_GUEST, id);
  }
  public getIdGuest(): number {
    // @ts-ignore
    return window.sessionStorage.getItem(ID_GUEST);
  }

  public setNameKey(name: string){
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, name);
  }
  public getNameKey(): string {
    return window.sessionStorage.getItem(USERNAME_KEY);
  }
  public setTokenKey(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getTokenKey(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public setRoleKey(roles: string[]){
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }
  public getRoleKey(): string[]{
    const roles = [];
    if (sessionStorage.getItem(TOKEN_KEY)){
      // @ts-ignore
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        roles.push(role.authority);
      });
    }
    return roles;
  }
}
