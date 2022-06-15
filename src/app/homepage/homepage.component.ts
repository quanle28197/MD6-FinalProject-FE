import {Component, OnInit} from '@angular/core';
import {TokenService} from '../security/token.service';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../user/service/user.service';
import {Router} from '@angular/router';
import {CompanyService} from '../service/company/company.service';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  companyHot: any[] = [];
  totalElements: number = 0;
  checkLogin: boolean = false;
  checkUser: boolean = false;
  idGuest: number;
  searchKey: string = '';


  rcmdate: any[] = [];
  RecuitmentNewNeed:any;
  recruimentNew: any;


  constructor(private companyService: CompanyService,
              private tokenService: TokenService,
              public dialog: MatDialog,
              private userService: UserService,
              private router: Router,
  ) {
    this.companyService.fidAllCompanyByStatus(4).subscribe(data => {

      this.companyHot = data;

    });
    this.checklogin();
  }

  checkUserCurrent() {
    if (this.tokenService.getTokenKey()) {
      this.idGuest = this.tokenService.getIdGuest();
      for (let i = 0; i < this.tokenService.getTokenKey().length; i++) {
        if (this.tokenService.getTokenKey()[i] == 'USER') {
          this.userService.getUserById(this.idGuest).subscribe(data => {
            if (data) {
              this.checkUser = true;
            }
          });
        } else {
          this.checkUser = false;
        }
      }
    } else {
      this.checkUser = true;
    }
  }

  checklogin() {
    if (this.tokenService.getTokenKey()) {
      this.checkLogin = true;
    }
  }

  ngOnInit(): void {
  }

  ngSubmit(f: NgForm) {
  }

}
