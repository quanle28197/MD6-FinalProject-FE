import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentRoutingModule} from './content-routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TopCompanyComponent} from './top-company/top-company.component';
import {RecruitmentNewComponent} from './recruitment-new/recruitment-new.component';
import {BannerAreaComponent} from './banner-area/banner-area.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {UserComponent} from './user/user.component';
import {CompanyComponent} from './user-company/company.component';


@NgModule({
  declarations: [HomepageComponent, TopCompanyComponent, RecruitmentNewComponent, BannerAreaComponent, CompanyDetailComponent, UserComponent, CompanyComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContentModule {
}
