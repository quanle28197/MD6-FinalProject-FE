import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import {BannerAreaComponent} from './banner-area/banner-area.component';
import {TopCompanyComponent} from './top-company/top-company.component';
import {RecruitmentNewComponent} from './recruitment-new/recruitment-new.component';
import {DetailCompanyComponent} from './detail-company/detail-company.component';
import {DetailRecruitmentComponent} from './detail-recruitment/detail-recruitment.component';
import {FieldSearchComponent} from './q-search/field-search/field-search.component';
import {ChipsSearchComponent} from './chips-search/chips-search.component';
import {MatChipsModule} from '@angular/material';

@NgModule({
  declarations: [HomepageComponent,
    BannerAreaComponent,
    TopCompanyComponent,
    RecruitmentNewComponent, DetailCompanyComponent, DetailRecruitmentComponent, FieldSearchComponent, ChipsSearchComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatChipsModule
  ]
})
export class UserModule {
}
