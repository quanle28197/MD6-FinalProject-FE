import { Component, OnInit } from '@angular/core';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {WorkingTimeService} from '../../service/workingTime/working-time.service';
import {FieldService} from '../../service/field/field.service';

@Component({
  selector: 'app-create-recruitmentnew',
  templateUrl: './create-recruitmentnew.component.html',
  styleUrls: ['./create-recruitmentnew.component.scss']
})
export class CreateRecruitmentnewComponent implements OnInit {
  // form : any = {};
  // workingTimes: any = [];
  // fields: any = [];
  // vacancies1: any = [];
  // cities: any = [];
  // status: string = "Mời bạn nhập thông tin bài viết";
  // recruitmentNew : RecruitmentNew;
  // gender: any = [
  //   {
  //     id: 1,
  //     name: "Nam"
  //   },
  //   {
  //     id: 2,
  //     name: "Nữ"
  //   },
  //   {
  //     id: 3,
  //     name: "Nam và Nữ"
  //   }
  // ];
  //
  // error1:any = {
  //   message: "no_quantity"
  // };
  // error2:any = {
  //   message: "no_salary"
  // };
  // success:any = {
  //   message: "yes"
  // };

  constructor(private  workingTimeService: WorkingTimeService,
              private fieldService: FieldService,
               ) { }

  ngOnInit(): void {
  }

}
