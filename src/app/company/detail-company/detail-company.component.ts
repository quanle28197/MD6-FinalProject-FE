import { Component, OnInit } from '@angular/core';
import {EditCompany} from '../../model/editCompany';
import {Router} from '@angular/router';
import {CompanyService} from '../../service/company/company.service';
import {TokenService} from '../../security/token.service';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.scss']
})
export class DetailCompanyComponent implements OnInit {
  check = true;
  idCustom: number;
  companyCurrent: any;
  editCompany: EditCompany;

  constructor(private router: Router,
              private companyService: CompanyService,
              private tokenService: TokenService) {
    // @ts-ignore
    this.idCustom = tokenService.setIdGuest();
    this.companyService.getCompanyNameById(this.idCustom).subscribe(data => {
      this.companyCurrent = data;
    });
  }

  ngOnInit(): void {
  }

  ngSubmit(form: any) {
    console.log(this.companyCurrent);
    this.editCompany = new EditCompany(this.companyCurrent.name,
      this.companyCurrent.avatar,
      this.companyCurrent.description,
      this.companyCurrent.address,
      this.companyCurrent.employeeQuantity,
      this.companyCurrent.linkMap,
      this.companyCurrent.phone);
    console.log(this.editCompany);
    this.companyService.editCompany(this.idCustom , this.editCompany).subscribe(data => {
      console.log(data);
      this.check = true;
    });
  }

  onUpLoadAvatar(event) {
    this.companyCurrent.avatar = event;
  }
}