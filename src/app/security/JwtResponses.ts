import {Role} from '../model/role';

export class JwtResponse {
  idAccount: number;
  idGuest: number;
  token: string;
  username: string;
  roles: Role[];

  constructor(idAccount: number, idGuest: number, token: string, username: string, roles: Role[]) {
    this.idAccount = idAccount;
    this.idGuest = idGuest;
    this.token = token;
    this.username = username;
    this.roles = roles;
  }
}
