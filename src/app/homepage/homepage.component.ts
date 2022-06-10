import {Component, OnInit} from '@angular/core';
import {TokenService} from '../security/token.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
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
    this.companyService.fidAllCompanyByStatus(4).subscribe(data => {

      this.companyHot = data;

    });
    this.checklogin();
    this.checkdate();
  }

  checkdate() {
    this.recruitmentNewService.getAll().subscribe(data => {
      this.rcmdate = data;
      for (let i = 0; i < this.rcmdate.length; i++) {
        console.log("hello");
        const dateRCM = new Date(this.rcmdate[i].expDate);
        console.log(dateRCM);
        const today = new Date();
        console.log(today);
        // @ts-ignore
        const c = (today - dateRCM) / (1000 * 3600 * 24);
        console.log(c);
        if (c >= 0) {
          this.recruitmentNewService.changeStatusById(this.rcmdate[i].id).subscribe(data => {
            console.log(data);
          });
        }
      }
    });

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

  findByRecuitmentNewNeed() {
    this.companyService.findByRecuitmentNewNeed().subscribe(data => {
      this.RecuitmentNewNeed = data;
    });
  }

  ngOnInit(): void {
    this.pageRecruiment({page: 0, size: 4});
    this.checkUserCurrent();
    this.findByRecuitmentNewNeed();
  }

  checklogin() {
    if (this.tokenService.getTokenKey()) {
      this.checkLogin = true;
    }
  }

  pageRecruiment(nextPage) {
    this.rcms.pageRecruitmentNew(nextPage).subscribe(data => {
      this.recruimentNew = data['content'];
      this.totalElements = data['totalElements'];
    });
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.pageRecruiment(request);
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
}
