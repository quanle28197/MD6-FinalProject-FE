import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentRoutingModule} from './content-routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopCompanyComponent } from './top-company/top-company.component';


@NgModule({
  declarations: [HomepageComponent, TopCompanyComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContentModule {
}
