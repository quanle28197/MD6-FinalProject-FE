import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {AccountService} from '../../service/account/account.service';
import {RecruitmentNewService} from '../../service/recruitmentNew/recruitment-new.service';
import {TokenService} from '../../security/token.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-lock-unlock-recruiment',
  templateUrl: './lock-unlock-recruiment.component.html',
  styleUrls: ['./lock-unlock-recruiment.component.scss']
})
export class LockUnlockRecruimentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'editStatus'];
  dataSource: any;
  recruitmentNews: RecruitmentNew[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private accountService: AccountService,
              private recruitmentNewService: RecruitmentNewService,
              private token: TokenService) {
  }

  ngOnInit(): void {
    this.getListRecruitmentNew();
  }

  getListRecruitmentNew() {
    this.accountService.showAllAdminRecruitment().subscribe(listAdminRecruitment => {
      this.recruitmentNews = listAdminRecruitment;
      this.dataSource = new MatTableDataSource<RecruitmentNew>(this.recruitmentNews);
      this.dataSource.paginator = this.paginator;

    });
  }

  changeStatus(id: number) {
    this.accountService.changeStatusById2(id).subscribe(data => {
      this.getListRecruitmentNew();
    });
  }
}
