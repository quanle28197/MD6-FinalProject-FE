import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {RecruitmentNewService} from '../../../service/recruitmentNew/recruitment-new.service';
import {RecruitmentNew} from '../../../model/recruitmentNew';
import {TokenService} from '../../../security/token.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../../dialog/dialog.component';
import {CompanyService} from '../../../service/company/company.service';

import {StatusRequest} from '../../../model/statusRequest';
import {any} from 'codelyzer/util/function';

import {DetailRecruitmentnewComponent} from '../detail-recruitmentnew/detail-recruitmentnew.component';


@Component({
  selector: 'app-list-recruitmentnew-company',
  templateUrl: './list-recruitmentnew-company.component.html',
  styleUrls: ['./list-recruitmentnew-company.component.scss']
})
export class ListRecruitmentnewCompanyComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'expDate', 'status', 'edit', 'delete', 'editStatus'];
  dataSource: any;
  nameCompany: string;
  descriptionCompany: string;
  recruitmentNews: RecruitmentNew[] = [];
  statusRequest: StatusRequest;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  form: any = {};
  status:boolean;
  constructor(private recruitmentNewService: RecruitmentNewService,
              private token: TokenService,
              private dialog: MatDialog,
              private companyService: CompanyService
  ) {
  }

  ngOnInit(): void {
    this.getListRecruitmentNew();
    this.getNameByID();

  }

  getListRecruitmentNew() {
    this.recruitmentNewService.showAllListRecruitmentNew(this.token.getIdGuest()).subscribe(listRN => {
      this.recruitmentNews = listRN;
      this.dataSource = new MatTableDataSource<RecruitmentNew>(this.recruitmentNews);
      this.dataSource.paginator = this.paginator;
      console.log(listRN);

    });
  }

  getNameByID() {
    const idGuest = this.token.getIdGuest();
    this.companyService.getCompanyNameById(idGuest).subscribe(data => {
      this.nameCompany = data.name;
      this.descriptionCompany = data.description;
    });
  }

  deleteRecruitmentNew(id: number) {
    this.recruitmentNewService.deleteRecruitmentNewById(id).subscribe(() => {
      this.getListRecruitmentNew();
    });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('ressult sau khi bam nut --> ', result);
      if (result) {
        this.deleteRecruitmentNew(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }



  changeStatus(idRecrui: number) {
    this.recruitmentNewService.changeStatusById(idRecrui).subscribe(data=>{
      this.getListRecruitmentNew();
    });
  }





  openDialogDetails(id) {
    const dialogRef = this.dialog.open(DetailRecruitmentnewComponent, {
      data : {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getListRecruitmentNew();
      console.log('The dialog was closed');
    });
  }

}
