import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../service/company/company.service';
import {Company} from '../../model/company';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit {
  company: Company[] = [];
  id: number = 0;
  sub: Subscription;
  constructor(private companyService: CompanyService,
              private activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getListCompany();
  }


  getListCompany() {
    this.companyService.getAllCompany().subscribe(listCompany => {
      this.company = listCompany;
    });
  }


}
