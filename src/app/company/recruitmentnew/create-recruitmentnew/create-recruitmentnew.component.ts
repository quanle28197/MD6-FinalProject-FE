import { Component, OnInit } from '@angular/core';
import {RecruitmentNew} from '../../../model/recruitmentNew';
import {WorkingTimeService} from '../../../service/workingTime/working-time.service';
import {FieldService} from '../../../service/field/field.service';
import {VacanciesService} from '../../../service/vacancies/vacancies.service';
import {CityService} from '../../../service/city/city.service';
import {TokenService} from '../../../security/token.service';
import {RecruitmentNewServiceService} from '../../../service/recruitmentNew/recruitment-new.service';

@Component({
  selector: 'app-create-recruitmentnew',
  templateUrl: './create-recruitmentnew.component.html',
  styleUrls: ['./create-recruitmentnew.component.scss']
})
export class CreateRecruitmentnewComponent implements OnInit {
  form : any = {};
  workingTimes: any = [];
  fields: any = [];
  vacancies1: any = [];
  cities: any = [];
  status: string = "Mời bạn nhập thông tin bài viết";
  recruitmentNew : RecruitmentNew;
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
  ];

  error1: any = {
    message: "no_quantity"
  };
  error2: any = {
    message: "no_salary"
  };
  success: any = {
    message: "yes"
  };
  constructor(private workingTimeService: WorkingTimeService,
              private fieldService: FieldService,
              private vacanciesService: VacanciesService,
              private cityService: CityService,
              private recruitmentNewService: RecruitmentNewServiceService,
              private token: TokenService) {
    this.showAllWorkingTime();
    this.showAllField();
    this.showAllVacancies();
    this.showAllCity();
  }

  showAllWorkingTime() {
    this.workingTimeService.showAll().subscribe(data => {
      this.workingTimes = data;
      console.log(data);
    });
  }

  showAllField(){
    this.fieldService.findAll().subscribe(data1 => {
      this.fields = data1;
      console.log(data1);
    });
  }

  showAllVacancies(){
    this.vacanciesService.showAll().subscribe(data2 => {
      this.vacancies1 = data2;
      console.log(data2)
    });
  }

  showAllCity() {
    this.cityService.showAll().subscribe(data3 => {
      this.cities = data3;
      console.log(data3);
    });
  }
  ngOnInit(): void {
  }

  ngSubmit() {
    const city = {
      id: this.form.city
    };
    const workingTime = {
      id: this.form.workingTime
    };
    const vacancies = {
      id: this.form.vacancies
    };
    const field = {
      id: this.form.field
    };
    const company = {
      id: this.token.getIdGuest()
    };

    this.recruitmentNew = new RecruitmentNew(
      this.form.title,
      workingTime,
      field,
      company,
      vacancies,
      this.form.expDate,
      this.form.description,
      city,
      this.form.quantity,
      this.form.gender,
      this.form.salary
    );
    console.log(this.recruitmentNew);
    this.recruitmentNewService.createRecruitmentNew(this.recruitmentNew).subscribe(data =>{
      console.log(data);
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
        this.status = 'Tạo mới tin tuyển dụng thành công!'
      }
    })
  }
}
