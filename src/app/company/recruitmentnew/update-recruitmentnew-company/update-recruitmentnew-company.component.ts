import {Component, OnInit} from '@angular/core';
import {City} from "../../../model/city";
import {RecruitmentNew} from "../../../model/recruitmentNew";
import {WorkingTimeService} from "../../../service/workingTime/working-time.service";
import {FieldService} from "../../../service/field/field.service";
import {VacanciesService} from "../../../service/vacancies/vacancies.service";
import {CityService} from "../../../service/city/city.service";
import {RecruitmentNewService} from "../../../service/recruitmentNew/recruitment-new.service";
import {TokenService} from "../../../security/token.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-recruitmentnew-company',
  templateUrl: './update-recruitmentnew-company.component.html',
  styleUrls: ['./update-recruitmentnew-company.component.scss']
})
export class UpdateRecruitmentnewCompanyComponent implements OnInit {
  form: any = {};

  status: string = "Mời bạn nhập thông tin cần sửa";
  recruitmentNew: RecruitmentNew;

  id: number;

  workingTimes: any = [];
  fields: any = [];
  vacancies1: any = [];
  cities: any = [];
  gender: any = [
    {
      id: 1,
      name: "Nam"
    },
    {
      id: 2,
      name: "Nữ"
    },
    {
      id: 3,
      name: "Nam và Nữ"
    }
  ]

  error1: any = {
    message: "no_quantity"
  }
  error2: any = {
    message: "no_salary"
  }
  success: any = {
    message: "yes"
  }

  constructor(private workingTimeService: WorkingTimeService,
              private fieldService: FieldService,
              private vacanciesService: VacanciesService,
              private cityService: CityService,
              private recruitmentNewService: RecruitmentNewService,
              private token: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
    this.showAllWorkingTime()
    this.showAllField()
    this.showAllVacancies()
    this.showAllCity()
  }

  showAllWorkingTime() {
    this.workingTimeService.showAll().subscribe(data => {
      this.workingTimes = data;
    })
  }

  showAllField() {
    this.fieldService.showAll().subscribe(data1 => {
      this.fields = data1;
    })
  }

  showAllVacancies() {
    this.vacanciesService.showAll().subscribe(data2 => {
      this.vacancies1 = data2;
    })
  }

  showAllCity() {
    this.cityService.showAll().subscribe(data3 => {
      this.cities = data3;
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.recruitmentNewService.getRecruitmentNewById(this.id).subscribe(data => {
      this.recruitmentNew = data;
    })
  }

  onUpdate() {

    this.recruitmentNewService.updateRecruitment(this.id, this.recruitmentNew).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        // @ts-ignore
        this.status = 'Vui lòng nhập số lượng người cần tuyển!';
      }
      if (JSON.stringify(data) == JSON.stringify(this.error2)) {
        // @ts-ignore
        this.status = 'Vui lòng nhập mức lương!';
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        // @ts-ignore
        this.status = 'Cập nhật tin tuyển dụng thành công!'
      }
    })
  }
}
