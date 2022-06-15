import {Component, OnInit} from '@angular/core';
import {SearchJob} from '../../../model/SearchJob';
import {Subscription} from 'rxjs';
import {City} from '../../../model/city';
import {Field} from '../../../model/field';
import {Vacancies} from '../../../model/vacancies';
import {WorkingTime} from '../../../model/workingTime';
import {RecruitmentNewService} from '../../../service/recruitmentNew/recruitment-new.service';
import {CityService} from '../../../service/city/city.service';
import {FieldService} from '../../../service/field/field.service';
import {CompanyService} from '../../../service/company/company.service';
import {WorkingTimeService} from '../../../service/workingTime/working-time.service';
import {TokenService} from '../../../security/token.service';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApplyService} from '../../../service/apply/apply.service';
import {VacanciesService} from '../../../service/vacancies/vacancies.service';

@Component({
  selector: 'app-list-recruitment-user',
  templateUrl: './list-recruitment-user.component.html',
  styleUrls: ['./list-recruitment-user.component.scss']
})
export class ListRecruitmentUserComponent implements OnInit {
  searchJob: SearchJob;
  recruimentNews: any;
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
  fiels: Field[] = [];
  company: any[] = [];
  vacancies: Vacancies[] = [];
  workingTime: WorkingTime[] = [];

  constructor(
    private recruitmentNewService: RecruitmentNewService,
    private cityService: CityService,
    private fieldService: FieldService,
    private companyService: CompanyService,
    private workingTimeService: WorkingTimeService,
    private vacanciesService: VacanciesService,
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
      // @ts-ignore
      this.searchJob = new SearchJob(this.searchKey, null, null, null, null, 0, 3, null);
      this.recruitmentNewService.searchByObj(this.searchJob).subscribe(data => {
        this.recruimentNews = data.data;
        this.totalSize = data.totalRecord;
        console.log(this.recruimentNews);
      });
      this.getAllCity();
      this.getAllField();
      this.getAllCompany();
      this.getAllVacancies();
      this.getAllWorkingTime();
    }

    formatLabel(value: number) {
      if (value >= 100000) {
        return Math.round(value / 100000) + 'tr';
      }
      return value;
    }

    checkUserCurrent() {
      if (this.tokenService.getTokenKey()) {
        this.idGuest = this.tokenService.getIdGuest();
        // @ts-ignore
        for (let i = 0; i < this.tokenService.getRoleKey(); i++) {
          console.log(this.tokenService.getRoleKey() [i]);
          if (this.tokenService.getRoleKey() [i] == 'USER') {
            this.userService.getUserById(this.idGuest).subscribe(data => {
              if (data) {
                console.log('Xin Chao');
                this.checkUser = true;
                console.log(data);
              }
            });
          } else {
            this.checkUser = false;
          }
        }
      }
    }
    getAllCity() {
      this.cityService.showAll().subscribe(data => {
        this.city = data;
      });
    }

    getAllField() {
      this.fieldService.showAll().subscribe(data => {
        this.fiels = data;
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
    };

  pagination() {
    this.start = this.pageCurrent * this.pageSize;
    console.log(this.start);
    this.searchJob = new SearchJob(this.searchJob.title, this.searchJob.cityId, this.searchJob.fieldId, this.searchJob.companyId, this.searchJob.vacancies, this.searchJob.workingTimeId, this.start, this.pageSize, this.searchJob.salary);
    console.log(this.searchJob);
    this.recruitmentNewService.searchByObj(this.searchJob).subscribe(data => {
      this.recruimentNews = data.data;
      console.log(this.recruimentNews);
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
  }

}
