import { Component, OnInit } from '@angular/core';
import {ApplyService} from '../../service/apply/apply.service';
import {PageEvent} from '@angular/material/paginator';
import {TokenService} from '../../security/token.service';
import {ChangeStatusApply} from '../../model/changeStatusApply';

@Component({
  selector: 'app-apply-company',
  templateUrl: './apply-company.component.html',
  styleUrls: ['./apply-company.component.scss']
})
export class ApplyCompanyComponent implements OnInit {
  applyList: any[] = [];
  totalElements: number = 0;
  idCompany: number;
  notify: any = null;

  constructor(private applyService: ApplyService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.pageCategory({page: 0, size: 3});
  }
  pageCategory(nextPage){
    this.idCompany = this.tokenService.getIdGuest();
    this.applyService.pageCompany(nextPage,this.idCompany).subscribe(data =>{
      this.applyList = data['content'];
      console.log(this.applyList);
      this.totalElements = data['totalElements'];
      console.log(this.totalElements);
    });
  }
  nextPage(event: PageEvent){
    console.log(event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.pageCategory(request);
  }

  apcept(id) {
    // @ts-ignore
    const event: PageEvent = undefined;
    const changeStatus: ChangeStatusApply = new ChangeStatusApply(id,1);
    this.applyService.apply(changeStatus).subscribe(data =>{
      this.notify = data.message;
      this.pageCategory(event);
    });
  }

  reject(id) {
    const changeStatus: ChangeStatusApply = new ChangeStatusApply(id,0);
    this.applyService.apply(changeStatus).subscribe(data => {
      this.notify = data.message;
      this.pageCategory(event);
    });
  }

  checkAccept(status) {
    if (status == "APCEPT" || status == "REJECT"){
      return false;
    }
    else {
      return true;
    }
  }
}
