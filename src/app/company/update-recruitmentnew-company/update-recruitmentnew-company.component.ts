import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-recruitmentnew-company',
  templateUrl: './update-recruitmentnew-company.component.html',
  styleUrls: ['./update-recruitmentnew-company.component.scss']
})
export class UpdateRecruitmentnewCompanyComponent implements OnInit {
  form: any = {};
  status: string = "Edit your profile";

  id: number;
  workingTimes: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
