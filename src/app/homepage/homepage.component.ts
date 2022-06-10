import {Component, OnInit} from '@angular/core';
import {TokenService} from '../security/token.service';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../user/service/user.service';
import {Router} from '@angular/router';


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


  constructor(private tokenService: TokenService,
              public dialog: MatDialog,
              private userService: UserService,
              private router: Router,
  ) {
    this.checklogin();
  }


  checkUserCurrent() {
    if (this.tokenService.getTokenKey()) {
      this.idGuest = this.tokenService.getIdGuest();
      for (let i = 0; i < this.tokenService.getRoleKey().length; i++) {
        if (this.tokenService.getRoleKey()[i] == 'USER') {
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


  ngSubmit(f: any) {
    console.log(f.value);
    this.searchKey = f.value.searchKey;
    if (this.searchKey == '') {
      this.router.navigate([`list-recruitmentnew-user/xxx`]);
    } else {
      this.router.navigate([`list-recruitmentnew-user/${this.searchKey}`]);
    }
  }

  ngOnInit(): void {
  }
}
