import {Component, OnInit} from '@angular/core';
import {AuthService} from '../security/auth.service';
import {TokenService} from '../security/token.service';
import {Router} from '@angular/router';
import {SignInForm} from '../security/SignInForm';
import {FormControl, Validators} from '@angular/forms';
import {ResponseBody} from '../model/response-body';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isShowPassword = true;
  status = '';
  emailFormControl = new FormControl('', [
    Validators.email, Validators.required
  ]);
  signInForm: SignInForm;

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.signInForm = new SignInForm('', '');
  }

  onLogin() {
    this.authService.signIn(this.signInForm).subscribe((resp: ResponseBody) => {
      console.log(resp);
      if (resp.code === '0000') {
        this.tokenService.setToken(resp.data);
        const roles = this.tokenService.getRoles();
        if (roles.length > 0) {
          roles.forEach(role => {
            if (role === 'COMPANY') {
              this.router.navigate(['/home']).then(() => console.log('redirect to home page'));
              window.location.reload();
            } else if (role === 'USER') {
              this.router.navigate(['/detail-cv/']).then(() => console.log('redirect to user page'));
              window.location.reload();
            }
          });
        }
      } else {
        this.status = resp.message;
      }
    }, error => console.log(error));
  }
}
