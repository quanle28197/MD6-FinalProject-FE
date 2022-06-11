import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {TopCompanyComponent} from './top-company/top-company.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '',
    component: TopCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {
}
