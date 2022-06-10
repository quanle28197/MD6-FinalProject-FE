import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../service/company.service';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {Company} from '../../model/company';
import {TokenService} from '../../security/token.service';

@Component({
  selector: 'app-web-company',
  templateUrl: './web-company.component.html',
  styleUrls: ['./web-company.component.scss']
})
export class WebCompanyComponent implements OnInit {
  idCustom: number;
  emailCompany;
  companyCurrent: Company;
  id: number = 0;
  sub: Subscription;

  constructor(private companyService: CompanyService,
              private tokenService: TokenService,
              private activeRouter: ActivatedRoute,
              private dialog: MatDialog) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.emailCompany = tokenService.getTokenKey();
      this.companyService.getCompanyNameById(this.id).subscribe(data => {
        console.log(data);
        this.companyCurrent = data;
      });
    });
  }

  ngOnInit(): void {
  }

}
