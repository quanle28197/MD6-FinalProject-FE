import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {TopCompanyComponent} from './top-company/top-company.component';
import {DetailCompanyComponent} from './detail-company/detail-company.component';
import {DetailRecruitmentComponent} from './detail-recruitment/detail-recruitment.component';


const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'list-detail/:id',
    component: DetailCompanyComponent
  },
  {
    path: 'list-recruitment/:id',
    component: DetailRecruitmentComponent
  },
  {
    path: 'list-company',
    component: TopCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
