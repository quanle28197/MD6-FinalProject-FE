import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../service/company/company.service';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {Company} from '../../model/company';
import {TokenService} from '../../security/token.service';
import {ApplyCompanyComponent} from '../apply-company/apply-company.component';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {RecruitmentNewServiceService} from '../../service/recruitmentNew/recruitment-new.service';

@Component({
  selector: 'app-web-company',
  templateUrl: './web-company.component.html',
  styleUrls: ['./web-company.component.scss']
})
export class WebCompanyComponent implements OnInit {
  idCustom: number;
  emailCompany;
  companyCurrent: Company;
  recruitmentNews: RecruitmentNew[] = [];
  id: number = 0;
  sub: Subscription;

  constructor(private companyService: CompanyService,
              private tokenService: TokenService,
              private activeRouter: ActivatedRoute,
              private recruitmentNewService: RecruitmentNewServiceService,
              private dialog: MatDialog) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.emailCompany = tokenService.getNameKey();
      this.companyService.getCompanyNameById(this.id).subscribe(data => {
        console.log(data);
        this.companyCurrent = data;
      });
    });
  }

  ngOnInit(): void {
    this.getListRecruitmentNew();
  }

  getListRecruitmentNew() {
    this.recruitmentNewService.showAllListRecruitmentNew(this.id).subscribe(listRN => {
      this.recruitmentNews = listRN;
      console.log(listRN);

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
}
