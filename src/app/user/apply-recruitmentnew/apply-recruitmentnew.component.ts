import {Component, Inject, OnInit} from '@angular/core';
import {RecruitmentNewService} from '../../service/recruitmentNew/recruitment-new.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {TokenService} from '../../security/token.service';
import {ApplyService} from '../../service/apply/apply.service';
import {Apply} from '../../model/apply';
import {DialogApplyFailComponent} from '../../dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component';
import {DialogApplyComponent} from '../../dialog/dialogApplyFail/dialog-apply/dialog-apply.component';
import {ForwardApply} from '../../model/forwardApply';
import {ForwardApplyService} from '../../service/apply/forward-apply.service';
import {DialogMatchComponent} from '../../dialog/dialog-match/dialog-match.component';

@Component({
  selector: 'app-apply-recruitmentnew',
  templateUrl: './apply-recruitmentnew.component.html',
  styleUrls: ['./apply-recruitmentnew.component.scss']
})
export class ApplyRecruitmentnewComponent implements OnInit {
  recruitmentNew: RecruitmentNew;
  checkLogin: boolean;
  idRcm: number;
  idGuest: number;

  forwardApply: ForwardApply;
  checkUser: boolean;

  constructor(private rcms: RecruitmentNewService, private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ApplyRecruitmentnewComponent>,
              private tokenService: TokenService,
              private applyService: ApplyService,
              public dialog: MatDialog,
              private recruitmentNewService: RecruitmentNewService,
              private forwardApplyService: ForwardApplyService
  ) {
    this.idRcm = data.id;
    this.rcms.getRecruitmentNewById(data.id).subscribe(data => {
      this.recruitmentNew = data;
      console.log(this.recruitmentNew);
    });
  }

  checkLoginWithToken() {
    if (this.tokenService.getTokenKey()) {
      this.checkLogin = true;
    }
  }

  checkUserWithToken() {
    if (this.tokenService.getTokenKey()) {
      this.checkLogin = true;
      this.idGuest = this.tokenService.getIdGuest();
      for (let i = 0; i < this.tokenService.getRoleKey().length; i++) {
        if (this.tokenService.getRoleKey()[i] == 'COMPANY') {
          this.checkUser = false;
        }
        if (this.tokenService.getRoleKey()[i] == 'USER') {
          this.checkUser = true;
        }
      }
    }
  }


  ngOnInit(): void {
    this.checkLoginWithToken();
    this.checkUserWithToken();
  }

  applyRecruitmentNewNow() {
    if (!this.tokenService.getTokenKey()) {
      this.dialogRef.close();
      // @ts-ignore
      this.router.navigate(['login']).then(this.dialogRef.close());
    } else {
      const apply: Apply = new Apply(this.idRcm, this.tokenService.getIdGuest());
      this.applyService.createCV(apply).subscribe(data2 => {
        console.log(data2);
        if (data2.message == 'CREATE') {
          this.dialogRef.close();
          const dialogRef1 = this.dialog.open(DialogApplyComponent);
          dialogRef1.afterClosed().subscribe(result => {
              this.recruitmentNewService.getRecruitmentNewById(this.idRcm).subscribe(data3 => {
                this.recruitmentNew = data3;
                this.forwardApply = new ForwardApply(this.tokenService.getIdGuest(), Number(this.recruitmentNew.company.id));
                this.forwardApplyService.forwardApply(this.forwardApply).subscribe(data4 => {
                  console.log('sau khi bam nut--->', data4);
                });
                console.log('ressult sau khi bam nut --> ', result);
                if (result == false) {

                }
              });
            }
          );
        } else if (data2.message == 'CREATE_FAIL') {
          this.dialogRef.close();
          const dialogRef1 = this.dialog.open(DialogApplyFailComponent);
          dialogRef1.afterClosed().subscribe(result => {
            console.log('ressult sau khi bam nut --> ', result);
            if (result == false) {

            }
          });
        } else if (data2.message == 'MATCH') {
          const dialogRef2 = this.dialog.open(DialogMatchComponent);
          dialogRef2.afterClosed().subscribe(result => {

          });
        }
      });
    }

  }
}
