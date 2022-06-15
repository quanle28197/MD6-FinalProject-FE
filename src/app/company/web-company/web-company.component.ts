import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../service/company/company.service';
import {TokenService} from '../../security/token.service';
import {RecruitmentNewService} from '../../service/recruitmentNew/recruitment-new.service';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {MatDialog} from '@angular/material/dialog';
import {ApplyRecruitmentnewComponent} from '../../user/apply-recruitmentnew/apply-recruitmentnew.component';
import {Company} from '../../model/company';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';


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
              private recruitmentNewService: RecruitmentNewService,
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
    const dialogRef = this.dialog.open(ApplyRecruitmentnewComponent, {
      data : {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
