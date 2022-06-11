// @ts-ignore

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
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {RegisterUserComponent} from './user/register-user/register-user.component';
import {MatBadgeModule} from '@angular/material/badge';
import {HomepageComponent} from './homepage/homepage.component';
import {MatSliderModule} from '@angular/material/slider';
import {registerLocaleData} from '@angular/common';
import { RegisterCompanyComponent } from './company/register-company/register-company.component';
import { WebCompanyComponent } from './company/web-company/web-company.component';
import { CreateCvComponent } from './user/CV/create-cv/create-cv.component';
import { DetailCvComponent } from './user/CV/detail-cv/detail-cv.component';
import { EditCvComponent } from './user/CV/edit-cv/edit-cv.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogCreateCvComponent } from './dialog/CV/dialog-create-cv/dialog-create-cv.component';
import { DialogNoCreateComponent } from './dialog/CV/dialog-no-create/dialog-no-create.component';
import {ActiveStatusComponent} from './user/active-status/active-status.component';


export const appRoutes: Routes = [
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'register-company', component: RegisterCompanyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-cv', component: CreateCvComponent},
  {path: 'update-cv/:id', component: EditCvComponent},
  {path: 'detail-cv/:id', component: DetailCvComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'active-status/:id', component: ActiveStatusComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'web-company/:id', component: WebCompanyComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterCompanyComponent,
    DialogComponent,
    RegisterUserComponent,
    CreateCvComponent,
    EditCvComponent,
    DetailCvComponent,
    HomepageComponent,
    ActiveStatusComponent,
    WebCompanyComponent,
    DialogCreateCvComponent,
    DialogNoCreateComponent,
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
    RouterModule.forRoot(appRoutes, {useHash: false}),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatSliderModule
  ],
  providers: [httpInterceptorProvider,
    {provide: LOCALE_ID, useValue: 'en-US'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
