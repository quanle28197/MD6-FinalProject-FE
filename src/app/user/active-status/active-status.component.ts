import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthService} from '../../security/auth.service';

@Component({
  selector: 'app-active-status',
  templateUrl: './active-status.component.html',
  styleUrls: ['./active-status.component.scss']
})
export class ActiveStatusComponent implements OnInit {
  id: number = 0;
  sub: Subscription;
  constructor( private router: Router,
               private activeRouter: ActivatedRoute,
               private auth: AuthService) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      console.log(this.id);
      this.auth.activeStatus(this.id).subscribe(data =>{
        console.log(data);
        this.router.navigate(["login"]).then(window.location.reload);
      });
    });
  }


  ngOnInit(): void {
  }

}
