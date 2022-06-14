import { Component, OnInit } from '@angular/core';
import {Company} from '../../model/company';
import {TopCompanyService} from '../../service/top-company/top-company.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RecuitmentNew} from '../../model/recuitment-new';
import {RecruitmentnewService} from '../../service/recruitmentnew/recruitmentnew.service';

@Component({
  selector: 'app-detail-recruitment',
  templateUrl: './detail-recruitment.component.html',
  styleUrls: ['./detail-recruitment.component.css']
})
export class DetailRecruitmentComponent implements OnInit {
  recruit: RecuitmentNew = {};
  id: number;

  constructor(private recruiService: RecruitmentnewService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.recruitView(this.id);
    });
  }
  ngOnInit() {
  }

  recruitView(id: number) {
    this.recruiService.findById(id).subscribe((recruit) => {
      this.recruit = recruit;
    });
  }

}
