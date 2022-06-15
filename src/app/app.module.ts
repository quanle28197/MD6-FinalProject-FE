import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {httpInterceptorProvider} from './security/auth.interceptor';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {DetailCompanyComponent} from './company/detail-company/detail-company.component';
import {
  ListRecruitmentnewCompanyComponent
} from './company/recruitmentnew/list-recruitmentnew-company/list-recruitmentnew-company.component';
import {RegisterCompanyComponent} from './company/register-company/register-company.component';
import {UploadImageComponent} from './upload/upload-image/upload-image.component';
import {ChangePasswordComponent} from './account/change-password/change-password.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CreateRecruitmentnewComponent} from './company/recruitmentnew/create-recruitmentnew/create-recruitmentnew.component';
import {
  UpdateRecruitmentnewCompanyComponent
} from './company/recruitmentnew/update-recruitmentnew-company/update-recruitmentnew-company.component';
import {MatNativeDateModule} from '@angular/material/core';
import {DialogComponent} from './dialog/dialog.component';
import {RegisterUserComponent} from './user/register-user/register-user.component';
import {MatBadgeModule} from '@angular/material/badge';
import {ListRecruitmentUserComponent} from './user/recruitmentnew/list-recruitment-user/list-recruitment-user.component';
import {CreateCvComponent} from './user/CV/create-cv/create-cv.component';
import {ApplyRecruitmentnewComponent} from './user/apply-recruitmentnew/apply-recruitmentnew.component';
import {DialogApplyFailComponent} from './dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component';
import {DialogApplyComponent} from './dialog/dialogApplyFail/dialog-apply/dialog-apply.component';
import { ListAccountComponent } from './admin/list-account/list-account.component';
import {LockUnlockRecruimentComponent} from './admin/lock-unlock-recruiment/lock-unlock-recruiment.component';
import {DetailCvComponent} from './user/CV/detail-cv/detail-cv.component';
import {EditCvComponent} from './user/CV/edit-cv/edit-cv.component';
import {DetailRecruitmentnewComponent} from './company/recruitmentnew/detail-recruitmentnew/detail-recruitmentnew.component';
import {HomepageComponent} from './homepage/homepage.component';
import {DialogCreateCompanyComponent} from './dialog/dialogCreateCompany/dialog-create-company/dialog-create-company.component';
import {ListCompanyComponent} from './company/list-company/list-company.component';
import {ActiveStatusComponent} from './user/active-status/active-status.component';
import {ApplyNowComponent} from './dialog/apply-now/apply-now.component';
import {WebCompanyComponent} from './company/web-company/web-company.component';
import {MatSliderModule} from '@angular/material/slider';
import {ApplyListComponent} from './user/apply-list/apply-list.component';
import {DialogCreateCvComponent} from './dialog/CV/dialog-create-cv/dialog-create-cv.component';
import {DialogEditCvComponent} from './dialog/CV/dialog-edit-cv/dialog-edit-cv.component';
import {UploadFileComponent} from './upload/upload-file/upload-file.component';
import {ApplyCompanyComponent} from './company/apply-company/apply-company.component';
import { DialogNoCreateComponent } from './dialog/CV/dialog-no-create/dialog-no-create.component';
import { DialogMatchComponent } from './dialog/dialog-match/dialog-match.component';
import {registerLocaleData} from '@angular/common';
import {MatCurrencyFormatModule} from 'mat-currency-format';



export const appRoutes: Routes = [
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'register-company', component: RegisterCompanyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list-recruitmentnew-company', component: ListRecruitmentnewCompanyComponent},
  {path: 'list-recruitmentnew-user/:id', component: ListRecruitmentUserComponent},
  {path: 'list-company', component: ListCompanyComponent},
  {path: 'detail-company', component: DetailCompanyComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'create-cv', component: CreateCvComponent},
  {path: 'update-cv/:id', component: EditCvComponent},
  {path: 'detail-cv/:id', component: DetailCvComponent},
  {path: 'create-recruitmentnew', component: CreateRecruitmentnewComponent},
  {path: 'update-recruitmentnew/:id', component: UpdateRecruitmentnewCompanyComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'active-status/:id', component: ActiveStatusComponent},
  {path: 'apply-list', component: ApplyListComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'list-account', component: ListAccountComponent},
  {path: 'lockUnlockAdmin', component: LockUnlockRecruimentComponent},
  {path: 'web-company/:id', component: WebCompanyComponent},
  {path: 'apply-company', component: ApplyCompanyComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

];

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DetailCompanyComponent,
    ListRecruitmentnewCompanyComponent,
    RegisterCompanyComponent,
    UploadImageComponent,
    CreateRecruitmentnewComponent,
    UpdateRecruitmentnewCompanyComponent,
    ChangePasswordComponent,
    DialogComponent,
    RegisterUserComponent,
    ListRecruitmentUserComponent,
    CreateCvComponent,
    ApplyRecruitmentnewComponent,
    DialogApplyFailComponent,
    DialogApplyComponent,
    EditCvComponent,
    DetailCvComponent,
    DetailRecruitmentnewComponent,
    HomepageComponent,
    DialogCreateCompanyComponent,
    ListCompanyComponent,
    ActiveStatusComponent,
    ListAccountComponent,
    LockUnlockRecruimentComponent,
    ApplyNowComponent,
    WebCompanyComponent,
    ApplyListComponent,
    DialogCreateCvComponent,
    DialogEditCvComponent,
    UploadFileComponent,
    ApplyCompanyComponent,
    DialogNoCreateComponent,
    DialogMatchComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgxAudioPlayerModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // tslint:disable-next-line:max-line-length
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, ReactiveFormsModule, MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatBadgeModule, MatSliderModule, MatCurrencyFormatModule,

  ],
  providers: [httpInterceptorProvider, {provide: LOCALE_ID, useValue: 'en-US'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
