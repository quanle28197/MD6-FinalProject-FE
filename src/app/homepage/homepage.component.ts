import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../service/company/company.service';
import {RecruitmentNewService} from '../service/recruitmentNew/recruitment-new.service';
import {RecruitmentNew} from '../model/recruitmentNew';
import {TokenService} from '../security/token.service';
import {ApplyRecruitmentnewComponent} from '../user/apply-recruitmentnew/apply-recruitmentnew.component';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {UserService} from '../user/service/user.service';
import {ApplyNowComponent} from '../dialog/apply-now/apply-now.component';
import {Apply} from '../model/apply';
import {DialogApplyComponent} from '../dialog/dialogApplyFail/dialog-apply/dialog-apply.component';
import {DialogApplyFailComponent} from '../dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component';
import {Router} from '@angular/router';
import {ApplyService} from '../service/apply/apply.service';
import {ForwardApply} from '../model/forwardApply';
import {ForwardApplyService} from '../service/apply/forward-apply.service';
import {Field} from '../model/field';
import {SearchJob} from '../model/SearchJob';
import {FieldService} from '../service/field/field.service';
import {CityService} from '../service/city/city.service';
import {City} from '../model/city';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  companyHot: any[] = [];
  recruimentNew: RecruitmentNew[] = [];
  RecuitmentNewNeed: any[] = [];
  totalElements: number = 0;
  checkLogin: boolean = false;
  checkUser: boolean = false;
  idGuest: number;
  searchKey: string = '';
  forwardApply: ForwardApply;
  recruitmentNew: RecruitmentNew;
  fields: Field[] = [];
  searchJob: SearchJob;
  cities: City[] = [];

  rcmdate: any[] = [];


  constructor(private companyService: CompanyService,
              private rcms: RecruitmentNewService,
              private tokenService: TokenService,
              public dialog: MatDialog,
              private userService: UserService,
              private router: Router,
              private applyService: ApplyService,
              private forwardApplyService: ForwardApplyService,
              private recruitmentNewService: RecruitmentNewService,
              private fieldService: FieldService,
              private cityService: CityService
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
    this.getAllJobByField();
    this.getAllField();
    this.getAllCity();
  }

  getAllCity() {
    this.cityService.showAll().subscribe(resp => {
      this.cities = resp;
    }, error => {
      console.log(error);
    });
  }

  getAllJobByField() {
    this.recruitmentNewService.getAllRecruitmentByField(this.searchJob).subscribe(recruiment => {
      this.recruimentNew = recruiment;
    }, error => {
      console.log(error);
    });
  }

  getAllField() {
    this.fieldService.showAll().subscribe(resp => {
      this.fields = resp;
    }, error => {
      console.log(error);
    });
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

  openDialogApply(id: number) {
    const dialogRef = this.dialog.open(ApplyRecruitmentnewComponent, {
      data: {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogApplyNow(id: number) {
    const dialogRef = this.dialog.open(ApplyNowComponent, {
      data: {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.tokenService.getTokenKey()) {
          this.router.navigate(['login']).then(window.location.reload);
        } else {
          const apply: Apply = new Apply(id, this.tokenService.getIdGuest());
          this.applyService.createCV(apply).subscribe(data2 => {
            if (data2.message == 'CREATE') {
              const dialogRef1 = this.dialog.open(DialogApplyComponent);
              dialogRef1.afterClosed().subscribe(result => {
                this.recruitmentNewService.getRecruitmentNewById(id).subscribe(data3 => {
                  this.recruitmentNew = data3;
                  this.forwardApply = new ForwardApply(this.tokenService.getIdGuest(), Number(this.recruitmentNew.company.id));
                  this.forwardApplyService.forwardApply(this.forwardApply).subscribe(data4 => {
                    console.log('sau khi bam nut--->', data4);
                  });
                });
                console.log('ressult sau khi bam nut --> ', result);
                if (result == false) {

                }
              });
            } else if (data2.message == 'CREATE_FAIL') {
              const dialogRef1 = this.dialog.open(DialogApplyFailComponent);
              dialogRef1.afterClosed().subscribe(result => {
                console.log('ressult sau khi bam nut --> ', result);
                if (result == false) {

                }
              });
            }
          });
        }
      }
      console.log('The dialog was closed');
    });
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
