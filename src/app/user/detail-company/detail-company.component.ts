import {Component, OnInit} from '@angular/core';
import {TopCompanyService} from '../../service/top-company/top-company.service';
import {Company} from '../../model/company';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit {
  company: Company = {};
  id: number;

  constructor(private companyService: TopCompanyService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.companyView(this.id);
    });
  }

  ngOnInit() {
  }

  companyView(id: number) {
    this.companyService.findById(id).subscribe((company) => {
      this.company = company;
    });
  }
}
