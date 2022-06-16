import {Component, OnInit, ViewChild} from '@angular/core';
import {RecruitmentNew} from '../model/recruitmentNew';
import {ActivatedRoute} from '@angular/router';
import {RecruitmentNewService} from '../service/recruitmentNew/recruitment-new.service';
import {MatTableDataSource} from '@angular/material/table';
import {TokenService} from '../security/token.service';
import {MatPaginator} from '@angular/material/paginator';
import { CompanyService } from '../service/company/company.service';
import { Company } from '../model/company';
import { MatDialog } from '@angular/material/dialog';
import { ApplyCompanyComponent } from '../company/apply-company/apply-company.component';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.scss']
})
export class QuickSearchComponent implements OnInit {
  recruitmentNew: RecruitmentNew[] = [];
  company: Company[] = [];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private route: ActivatedRoute,
              private recruitmentnewService: RecruitmentNewService,
              private token: TokenService,
              private companyService: CompanyService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllJoByField();
    this.getAllJobByCity();
    this.getAllRecruitment();
    this.getListCompany();
  }
  getAllRecruitment() {
    this.recruitmentnewService.showAllListRecruitmentNew(this.token.getIdGuest()).subscribe(listRN => {
      this.recruitmentNew = listRN;
      this.dataSource = new MatTableDataSource<RecruitmentNew>(this.recruitmentNew);
      this.dataSource.paginator = this.paginator;
      console.log(listRN);

    });
  }
  getAllJoByField() {
    this.route.queryParams.subscribe(params => {
      console.log(params.query);
      this.recruitmentnewService.getAllJobByField(params.query).subscribe(resp => {
        this.recruitmentNew = resp;
        console.log(resp);
        console.log('bla');
      }, error => console.log(error));
    });
  }

  getListCompany() {
    this.companyService.getAllCompany().subscribe(listCompany => {
      this.company = listCompany;
    });
  }

  openDialogApply(id) {
    const dialogRef = this.dialog.open(ApplyCompanyComponent, {
      data : {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  

  getAllJobByCity() {
    this.route.queryParams.subscribe(params => {
      this.recruitmentnewService.getAllJobByCity(params.query).subscribe(resp => {
        this.recruitmentNew = resp;
      }, error => {
        console.log(error);
      });
    });
  }
}


