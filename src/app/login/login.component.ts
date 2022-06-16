import {Component, OnInit} from '@angular/core';
import {AuthService} from '../security/auth.service';
import {TokenService} from '../security/token.service';
import {Router} from '@angular/router';
import {SignInForm} from '../security/SignInForm';
import {FormControl, Validators} from '@angular/forms';
import {Notify, Report} from 'notiflix';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  form: any = {};

  status = '';
  errorLock: any = {
    message: 'LOCK'
  };
  emailFormControl = new FormControl('', [
    Validators.email, Validators.required
  ]);



  // @ts-ignore
  signInForm: SignInForm;

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router,
              ) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    );
    this.authService.signIn(this.signInForm).subscribe(data => {
      console.log(data);
      if (JSON.stringify(data) == JSON.stringify(this.errorLock)) {
         Report.failure('Warning', 'Kích hoạt tài khoản trước khi đăng nhập nhé', 'Close');
         return;
      }
      if (data.token != undefined) {
        this.tokenService.setIdAccount(data.idAccount);
        this.tokenService.setIdGuest(data.idGuest);
        this.tokenService.setTokenKey(data.token);
        this.tokenService.setNameKey(data.username);
        this.tokenService.setRoleKey(data.roles);
        for (let i = 0; i < this.tokenService.getRoleKey().length; i++) {
          if (this.tokenService.getRoleKey()[i] == 'COMPANY') {
            this.router.navigate(['home']).then(() => {
              window.location.reload();
            });
          }
          if (this.tokenService.getRoleKey()[i] == 'USER') {
            this.authService.findById(this.tokenService.getIdAccount()).subscribe(data => {
              if (data == 'NON_ACTIVE') {
                window.sessionStorage.clear();
                this.router.navigate(['login']).then(() => {
                  window.location.reload();
                });
              }
            });
            this.router.navigate(['home']).then(() => {
              window.location.reload();
            });
          }
          if (this.tokenService.getRoleKey()[i] == 'ADMIN') {
            this.router.navigate(['home']).then(() => {
              window.location.reload();
            });
          }
        }
      }
    });
    this.status = 'Bạn nhập sai tài khoản hoặc mật khẩu!';
  }
}
