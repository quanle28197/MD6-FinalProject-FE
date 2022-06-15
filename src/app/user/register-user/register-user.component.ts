import {Component, OnInit} from '@angular/core';
import {Account} from '../../model/account';
import {AuthService} from '../../security/auth.service';
import {User} from '../../model/user';
// @ts-ignore
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  data: any = {
    password: '',
    confirmpassword: '',
    phone: ''
  };
  check: boolean = false;
  account: Account;
  idAccount: number;
  user: User;
  hide = true;
  hide1 = true;
  success: any = {
    message: 'yes'
  };

  constructor(private authService: AuthService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  ngSubmit(form) {
    console.log(this.data);
    if (this.checkPassword()) {
      const roles: string[] = ['user'];
      this.account = new Account(this.data.username, this.data.password, roles);
      console.log(this.account);
      this.authService.signUp(this.account).subscribe(data1 => {
        console.log(data1);
        this.idAccount = data1.id;
        this.createUser();
        form.reset();
      });
    }
  }

  createUser() {
    this.account.id = this.idAccount;
    const account11 = {
      id: this.idAccount
    };
    this.user = new User(this.data.name, this.data.phone, account11);
    console.log(this.user);
    this.authService.registerUser(this.user).subscribe(data2 => {
      if (JSON.stringify(data2) == JSON.stringify(this.success)) {
        // @ts-ignore
        const dialogRef1 = this.dialog.open(DialogCreateCompanyComponent);
        dialogRef1.afterClosed().subscribe(result => {
          console.log('The dialog was closed');

        });
      }
    });
  }

  checkPassword() {
    if (this.data.password == this.data.confirmpassword && this.data.password != '') {
      return true;
    } else if (this.data.password != this.data.confirmpassword && this.data.password != '' && this.data.confirmpassword != '') {
      return false;
    }
  }
}
