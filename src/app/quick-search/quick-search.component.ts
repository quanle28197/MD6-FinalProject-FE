import { Component, OnInit } from '@angular/core';
import {RecruitmentNew} from '../model/recruitmentNew';
import {ActivatedRoute} from '@angular/router';
import {RecruitmentNewService} from '../service/recruitmentNew/recruitment-new.service';
import {CompanyService} from '../service/company/company.service';
import {Company} from '../model/company';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.scss']
})
export class QuickSearchComponent implements OnInit {
  recruitmentNew: RecruitmentNew[] = [];


  constructor(private route: ActivatedRoute,
              private recruitmentnewService: RecruitmentNewService,
              ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params.query);
      this.recruitmentnewService.getAllJobByField(params.query).subscribe(resp => {
        this.recruitmentNew = resp;
        console.log(resp);
        console.log('bla');
      }, error => console.log(error));
    });
  }
}
