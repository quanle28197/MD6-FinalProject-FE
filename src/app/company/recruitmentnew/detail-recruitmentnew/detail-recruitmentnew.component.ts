import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RecruitmentNewService} from '../../../service/recruitmentNew/recruitment-new.service';
import {RecruitmentNew} from '../../../model/recruitmentNew';

@Component({
  selector: 'app-detail-recruitmentnew',
  templateUrl: './detail-recruitmentnew.component.html',
  styleUrls: ['./detail-recruitmentnew.component.scss']
})
export class DetailRecruitmentnewComponent implements OnInit {
  recruitmentNew: RecruitmentNew;
  constructor(private rcms : RecruitmentNewService,
              private router: Router,@Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef: MatDialogRef<DetailRecruitmentnewComponent>) {
    this.rcms.getRecruitmentNewById(data.id).subscribe(data =>{
      this.recruitmentNew = data;
      console.log(this.recruitmentNew);
    })
  }

  ngOnInit(): void {
  }

  back() {

  }
}
