import {Component, OnInit} from '@angular/core';
import {Account} from '../../model/account';
import {AuthService} from '../../security/auth.service';
import {Company} from '../../model/company';
import {CityService} from '../../service/city/city.service';
import {DialogCreateCompanyComponent} from '../../dialog/dialogCreateCompany/dialog-create-company/dialog-create-company.component';
import {MatDialog} from '@angular/material/dialog';
import {Report} from 'notiflix';


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
    }, error => Report.warning('Failed', 'Lập tài khoản công ty không thành công', 'Close'));
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
    this.company = new Company(this.data.name, this.data.avatar, this.data.description,
      this.data.address, this.data.employeeQuantity, city, this.data.linkMap, this.data.phone, account11);
    console.log(this.company);
    this.authService.registerCompany(this.company).subscribe(data2 => {
      console.log(data2);
      if (JSON.stringify(data2) === JSON.stringify(this.success)) {
        // @ts-ignore
        const dialogRef1 = this.dialog.open(DialogCreateCompanyComponent);
        dialogRef1.afterClosed().subscribe(result => {
          Report.success('Success', 'Lập tài khoản công ty thành công', 'Close');
        });
      }
    });
  }

  numericOnly(event) {
    const input = String.fromCharCode(event.keyCode);
    if (!/^[0-9]*$/.test(input)) {
      event.preventDefault();
    }
  }

  onUpLoadAvatar(event: any) {
    this.data.avatar = event;
  }
}
