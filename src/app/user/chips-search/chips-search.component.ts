import {Component, OnInit} from '@angular/core';
import {RecuitmentNew} from '../../model/recuitment-new';
import {RecruitmentnewService} from '../../service/recruitmentnew/recruitmentnew.service';
import {SearchJob} from '../../model/search-job';
import {Router} from '@angular/router';
import {Field} from '../../model/field';

@Component({
  selector: 'app-chips-search',
  templateUrl: './chips-search.component.html',
  styleUrls: ['./chips-search.component.css']
})
export class ChipsSearchComponent implements OnInit {
  recruitmentCompany: RecuitmentNew[] = [];
  fields: Field[] = [];
  searchJob: SearchJob;

  constructor(private recruitmentService: RecruitmentnewService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllJobByField();
    this.getAllField();
  }

  getAllJobByField() {
    this.recruitmentService.getAllRecruitmentByField(this.searchJob).subscribe(recruitment => {
      this.recruitmentCompany = recruitment;
    }, error => {
      console.log(error);
    });
  }

  getAllField() {
    this.recruitmentService.getAllField().subscribe(resp => {
      this.fields = resp;
    }, error => {
      console.log(error);
    });
  }

  goToSearch(param: string) {
    this.router.navigate(['/user/q-search', param]).then(r => console.log(r));
  }


}