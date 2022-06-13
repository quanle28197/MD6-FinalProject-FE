import {Component, OnInit} from '@angular/core';
import {RecruitmentNew} from '../../../model/recruitmentNew';
import {RecruitmentNewService} from '../../../service/recruitmentNew/recruitment-new.service';
import {PageEvent} from '@angular/material/paginator';
import {SearchJob} from '../../../model/SearchJob';
import {City} from '../../../model/city';
import {CityService} from '../../../service/city/city.service';
import {FieldService} from '../../../service/field/field.service';
import {Field} from '../../../model/field';
import {CompanyService} from '../../../service/company/company.service';
import {Company} from '../../../model/company';
import {VacanciesService} from '../../../service/vacancies/vacancies.service';
import {Vacancies} from '../../../model/vacancies';
import {WorkingTimeService} from '../../../service/workingTime/working-time.service';
import {WorkingTime} from '../../../model/workingTime';
import {TokenService} from '../../../security/token.service';
import {ApplyRecruitmentnewComponent} from '../../apply-recruitmentnew/apply-recruitmentnew.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {DetailRecruitmentnewComponent} from '../../../company/recruitmentnew/detail-recruitmentnew/detail-recruitmentnew.component';
import {ApplyNowComponent} from '../../../dialog/apply-now/apply-now.component';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Apply} from '../../../model/apply';
import {ApplyService} from '../../../service/apply/apply.service';
import {DialogApplyComponent} from '../../../dialog/dialogApplyFail/dialog-apply/dialog-apply.component';
import {DialogApplyFailComponent} from '../../../dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component';
import {Subscription} from 'rxjs';
import {DialogMatchComponent} from '../../../dialog/dialog-match/dialog-match.component';

@Component({
  selector: 'app-list-recruitment-user',
  templateUrl: './list-recruitment-user.component.html',
  styleUrls: ['./list-recruitment-user.component.scss']
})
export class ListRecruitmentUserComponent implements OnInit {
  searchJob: SearchJob;
  recruitmentNews: any;
  pageCurrent: any = 0;
  start: number = 0;
  pageSize: number = 3;
  totalSize: number = 3;
  check: boolean = false;
  checkUser: boolean = false;
  idGuest: number;
  advancedForm: boolean = false;
  sub: Subscription;
  searchKey: string;

  city: City[] = [];
  fields: Field[] = [];
  company: any[] = [];
  vacancies: Vacancies[] = [];
  workingTime: WorkingTime[] = [];


  constructor(private recruitmentNewService: RecruitmentNewService,
              private cityService: CityService,
              private fieldService: FieldService,
              private companyService: CompanyService,
              private vacanciesService: VacanciesService,
              private workingTimeService: WorkingTimeService,
              private tokenService: TokenService,
              public dialog: MatDialog,
              private userService: UserService,
              private router: Router,
              private applyService: ApplyService,
              private activeRouter: ActivatedRoute
  ) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.searchKey = (paramMap.get('id'));
      if (paramMap.get('id') == 'xxx') {
        this.searchKey = null;
      }
      console.log(this.searchKey);
    });
    this.searchJob = new SearchJob(this.searchKey, null, null, null, null, null, 0, 3, null);
    this.recruitmentNewService.searchByObj(this.searchJob).subscribe(data => {
      this.recruitmentNews = data.data;
      this.totalSize = data.totalRecord;
      console.log(this.recruitmentNews);
      // this.checkdate();

    });

    this.getAllCity();
    this.getAllField();
    this.getAllCompany();
    this.getAllVacancies();
    this.getAllWorkingTime();
  }

  // checkdate() {
  //   for (let i = 0; i < this.recruitmentNews.length; i++) {
  //     const dateRCM = new Date(this.recruitmentNews[i].expDate);
  //     console.log(dateRCM);
  //     const today = new Date();
  //     console.log(today);
  //     // @ts-ignore
  //     const c = (today - dateRCM) / (1000 * 3600 * 24);
  //     console.log(c);
  //     if (c >= 0) {
  //       this.recruitmentNewService.changeStatusById(this.recruitmentNews[i].id).subscribe(data => {
  //         console.log(data);
  //       });
  //     }
  //   }
  // }

  formatLabel(value: number) {
    if (value >= 1000000) {
      return Math.round(value / 1000000) + 'tr';
    }
    return value;
  }

  checkUserCurrent() {
    if (this.tokenService.getTokenKey()) {
      this.idGuest = this.tokenService.getIdGuest();
      for (let i = 0; i < this.tokenService.getRoleKey().length; i++) {
        console.log(this.tokenService.getRoleKey()[i]);
        if (this.tokenService.getRoleKey()[i] == 'USER') {
          this.userService.getUserById(this.idGuest).subscribe(data => {
            if (data) {
              console.log('hello');
              this.checkUser = true;
              console.log(data);
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

  getAllCity() {
    this.cityService.showAll().subscribe(data => {
      this.city = data;

    });
  }

  getAllField() {
    this.fieldService.showAll().subscribe(data => {
      this.fields = data;
    });
  }

  getAllCompany() {
    this.companyService.getAllCompany().subscribe(data => {
      this.company = data;
    });
  }

  getAllVacancies() {
    this.vacanciesService.showAll().subscribe(data => {
      this.vacancies = data;
    });
  }

  getAllWorkingTime() {
    this.workingTimeService.showAll().subscribe(data => {
      this.workingTime = data;
    });
  }


  ngOnInit(): void {
    this.checkLogin();
    this.checkUserCurrent();
  }

  pagination() {
    this.start = this.pageCurrent * this.pageSize;
    console.log(this.start);
    this.searchJob = new SearchJob(this.searchJob.title, this.searchJob.cityId, this.searchJob.fieldId, this.searchJob.companyId, this.searchJob.vacancies, this.searchJob.workingTimeId, this.start, this.pageSize, this.searchJob.salary);
    console.log(this.searchJob);
    this.recruitmentNewService.searchByObj(this.searchJob).subscribe(data => {
      this.recruitmentNews = data.data;
      console.log(this.recruitmentNews);
    });
  }

  leftPage() {
    if (this.pageCurrent != 0) {
      this.pageCurrent = this.pageCurrent - 1;
      this.pagination();
    }
  }

  checkLogin() {
    if (this.tokenService.getTokenKey()) {
      this.check = true;
    }
  }

  rightPage() {
    if (this.pageCurrent * this.pageSize >= this.totalSize) {

    } else {
      this.pageCurrent = this.pageCurrent + 1;
      this.pagination();
    }
  }

  ngSubmit(form) {
    if (form.value.title == '') {
      form.value.title = null;
    }
    if (form.value.cityId == '') {
      form.value.cityId = null;
    }
    if (form.value.fieldId == '') {
      form.value.fieldId = null;
    }
    if (form.value.companyId == '') {
      form.value.companyId = null;
    }
    if (form.value.vacancies == '') {
      form.value.vacancies = null;
    }
    if (form.value.workingTimeId == '') {
      form.value.workingTimeId = null;
    }
    if (form.value.salary == 0) {
      form.value.salary = null;
    }
    console.log(form.value);
    this.searchJob.title = form.value.title;
    this.searchJob.cityId = form.value.cityId;
    this.searchJob.fieldId = form.value.fieldId;
    this.searchJob.companyId = form.value.companyId;
    this.searchJob.vacancies = form.value.vacancies;
    this.searchJob.workingTimeId = form.value.workingTime;
    this.searchJob.salary = form.value.salary;
    this.start = 0;
    this.pageCurrent = 0;
    this.pagination();
    form.reset();
  }


  openDialogApply(id) {
    const dialogRef = this.dialog.open(ApplyRecruitmentnewComponent, {
      data: {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogApplyNow(id) {
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
            } else if (data2.message == 'MATCH') {
              const dialogRef2 = this.dialog.open(DialogMatchComponent);
              dialogRef2.afterClosed().subscribe(result => {

              });
            }
          });
        }
      }
      console.log('The dialog was closed');
    });
  }
}
