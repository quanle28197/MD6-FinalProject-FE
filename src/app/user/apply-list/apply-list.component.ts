import { Component, OnInit } from '@angular/core';
import {ApplyService} from '../../service/apply/apply.service';
import {TokenService} from '../../security/token.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {
  DetailRecruitmentnewCompanyComponent
} from '../../company/recruitmentnew/detail-recruitmentnew-company/detail-recruitmentnew-company.component';

@Component({
  selector: 'app-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrls: ['./apply-list.component.scss']
})
export class ApplyListComponent implements OnInit {
  applist: any [] = [];
  totalElements: number = 0;
  idGuest: number;

  constructor(private applyService: ApplyService,
              private token: TokenService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.pageApply({page: 0, size: 3});
  }

  pageApply(nextPage) {
    this.idGuest = this.token.getIdGuest();
    this.applyService.pageApply(nextPage, this.idGuest).subscribe(data => {
      this.applist = data['content'];
      this.totalElements = data['totalElements'];
      console.log(data);
    });
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.pageApply(request);
  }

  openDialogDetails(id) {
    const dialogRef = this.dialog.open(DetailRecruitmentnewCompanyComponent, {
      data : {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pageApply({page: 0, size: 3});
      console.log('The dialog was closed');
    });
  }
}

