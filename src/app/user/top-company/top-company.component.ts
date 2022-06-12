import {Component, OnInit} from '@angular/core';
import {Company} from '../../model/company';
import {TopCompanyService} from '../../service/top-company/top-company.service';

@Component({
  selector: 'app-top-company',
  templateUrl: './top-company.component.html',
  styleUrls: ['./top-company.component.css']
})
export class TopCompanyComponent implements OnInit {
  topCompany: Company[] = [];

  constructor(private topCompanyService: TopCompanyService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.topCompanyService.getAll().subscribe(company => {
      this.topCompany = company;
    }, e => {
      console.log(e);
    });
  }
}
