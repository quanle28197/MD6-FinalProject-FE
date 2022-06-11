import {Component, OnInit} from '@angular/core';
import {TokenService} from '../security/token.service';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {UserService} from '../user/service/user.service';
import {Company} from '../model/company';
import {CompanyService} from '../service/company/company.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checkLogin = false;

  checkRole: string;

  // @ts-ignore
  name: string;

  // @ts-ignore
  idGuest: number;


  company: Company;

  user: User;

  constructor(private tokenService: TokenService,
              private userService: UserService,
              private router: Router,
              private companyService: CompanyService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getTokenKey()) {
      this.checkLogin = true;
      this.idGuest = this.tokenService.getIdGuest();
      if (this.idGuest == -10) {
        this.checkRole = 'ADMIN';
        this.name = "ADMIN";
      }
      else {
          for (let i = 0; i < this.tokenService.getRoles().length; i++) {
            if (this.tokenService.getRoles()[i] == 'COMPANY') {
              this.companyService.getCompanyNameById(this.idGuest).subscribe(data => {
                console.log(data);
                this.company = data;
                this.checkRole = 'COMPANY';
                this.name = this.company.name;
              });
            }
          if (this.tokenService.getRoles()[i] == 'USER') {
            this.userService.getUserById(this.idGuest).subscribe(data => {
              console.log(data);
              this.user = data;
              this.checkRole = 'USER';
              this.name = this.user.name;
            });
          }
        }
      }

    }
  }

  logOut() {
    window.sessionStorage.clear();
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });
  }
}

