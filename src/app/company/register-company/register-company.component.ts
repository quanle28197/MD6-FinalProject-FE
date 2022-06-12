import { Component, OnInit } from '@angular/core';
import {Company} from '../../model/company';
import {AuthService} from '../../security/auth.service';
import {CityService} from '../../service/city/city.service';
import {MatDialog} from '@angular/material/dialog';
import {Account} from '../../model/account';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {
  data: any = {
    avatar: '',
    password: ''
  };
  account: Account;
  company: Company;
  idAccount: number;
  cities: any = [];
  status = '';
  success: any = {
    message: 'yes'
  };

  constructor(private authService: AuthService,
              private cityService: CityService,
              private dialog: MatDialog) {
    this.showAllCity();
  }

  showAllCity() {
    this.cityService.showAll().subscribe(data3 => {
      this.cities = data3;
      console.log(data3);
    });
  }

  ngOnInit(): void {
  }

  ngSubmit(form: any) {
    console.log();
    const roles: string[] = ['company'];
    // @ts-ignore
    this.account = new Account(this.data.username, this.data.password, roles);
    this.authService.signUp(this.account).subscribe(data1 => {
      console.log(data1);
      this.idAccount = data1.id;
      this.create();
      form.reset();
    }, error => alert(error));
  }

  create() {
    const city = {
      id: this.data.city
    };
    console.log(city);
    this.account.id = this.idAccount;
    const account11 = {
      id: this.idAccount
    };
    // @ts-ignore
    this.company = new Company(this.data.name, this.data.avatar, this.data.description,
      this.data.address, this.data.employeeQuantity, city, this.data.linkMap, this.data.phone, account11);
    console.log(this.company);
    this.authService.registerCompany(this.company).subscribe(data2 => {
      console.log(data2);
      if (JSON.stringify(data2) == JSON.stringify(this.success)){
        // @ts-ignore
        const dialogRef1 = this.dialog.open(DialogCreateCompanyComponent);
        dialogRef1.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
    });
  }

  onUpLoadAvatar(event: any) {
    this.data.avatar = event;
  }
}
