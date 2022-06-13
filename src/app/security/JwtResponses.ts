export class JwtResponse {
  idAccount: number;
  idGuest: number;
  token: string;
  username: string;
  roles: string[];

  constructor(idAccount: number, idGuest: number, token: string, username: string, roles: string[]) {
    this.idAccount = idAccount;
    this.idGuest = idGuest;
    this.token = token;
    this.username = username;
    this.roles = roles;
  }
}
