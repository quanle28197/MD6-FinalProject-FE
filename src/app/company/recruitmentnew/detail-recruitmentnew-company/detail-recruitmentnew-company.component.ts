import {Component, Inject, OnInit} from '@angular/core';
import {RecruitmentNew} from '../../../model/recruitmentNew';
import {RecruitmentNewServiceService} from '../../../service/recruitmentNew/recruitment-new.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-detail-recruitmentnew-company',
  templateUrl: './detail-recruitmentnew-company.component.html',
  styleUrls: ['./detail-recruitmentnew-company.component.scss']
})
export class DetailRecruitmentnewCompanyComponent implements OnInit {
  recruitmentNew: RecruitmentNew;

  constructor(private rcms: RecruitmentNewServiceService,
              private router: Router, @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DetailRecruitmentnewCompanyComponent>) {
    this.rcms.getRecruitmentNewById(data.id).subscribe(data => {
      this.recruitmentNew = data;
      console.log(this.recruitmentNew);
    });
  }

  ngOnInit(): void {
  }


}
