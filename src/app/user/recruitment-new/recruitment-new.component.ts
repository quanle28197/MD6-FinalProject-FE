import {Component, OnInit} from '@angular/core';
import {RecuitmentNew} from '../../model/recuitment-new';
import {RecruitmentnewService} from '../../service/recruitmentnew/recruitmentnew.service';
import {SearchJob} from '../../model/search-job';

@Component({
  selector: 'app-recruitment-new',
  templateUrl: './recruitment-new.component.html',
  styleUrls: ['./recruitment-new.component.css']
})

export class RecruitmentNewComponent implements OnInit {
  recruitmentCompany: RecuitmentNew [] = [];
  searchJob: SearchJob = {title: ''};

  constructor(private recruitmentService: RecruitmentnewService) {
  }

  ngOnInit() {
    this.getAllRecruitment();
  }

  getAllRecruitment() {
    this.recruitmentService.getAllRecruitment().subscribe(recruitment => {
      this.recruitmentCompany = recruitment;
    }, error => {
      console.log(error);
    });
  }
}
