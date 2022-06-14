import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {StatusRequest} from '../../model/statusRequest';
import {AccountService} from '../../service/account/account.service';
import {Account} from '../../model/account';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'editStatus'];

  dataSource: any;
  accounts: any [] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private accountService: AccountService,

  ) { }

  ngOnInit(): void {
    this.getListAccount();
  }

  getListAccount() {
    this.accountService.showAll().subscribe(listCompany => {
      this.accounts = listCompany;
      console.log(this.accounts);
      this.dataSource = new MatTableDataSource<Account>(this.accounts);
      this.dataSource.paginator = this.paginator;
      console.log(listCompany);

    });
  }
  changeStatus(id: number) {
    this.accountService.changeStatusById(id).subscribe(data => {
      this.getListAccount();
    });
  }


}
