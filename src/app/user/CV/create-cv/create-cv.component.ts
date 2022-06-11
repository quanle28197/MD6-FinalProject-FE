import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../security/token.service';
import {FormArray, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {WorkExpService} from '../../../service/workExp/work-exp.service';
import {SkillService} from '../../../service/skill/skill.service';
import {DialogCreateCvComponent} from '../../../dialog/CV/dialog-create-cv/dialog-create-cv.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogNoCreateComponent} from '../../../dialog/CV/dialog-no-create/dialog-no-create.component';
import {CVService} from '../../../service/cv/cv.service';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.scss']
})
export class CreateCvComponent implements OnInit {
  status: string = 'Please add more information to complete your account!';
  error1: any = {
    message: 'User is exist'
  };

  constructor(private cvService: CVService,
              private workExpService: WorkExpService,
              private skillService: SkillService,
              private token: TokenService,
              private fb: FormBuilder,
              private router: Router,
              private tokenService: TokenService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  check = false;

  cvForm = this.fb.group({
    expYear: [],
    salaryExpectation: [],
    fileCV: [],
    userId: this.token.getAccountId(),
    skills: this.fb.array([]),
    workExp: this.fb.array([])
  });

  get skills() {
    return this.cvForm.get('skills') as FormArray;
  }

  get workExps() {
    return this.cvForm.get('workExps') as FormArray;
  }

  onUpLoadAvatar(event: any) {
    this.cvForm.value.fileCV = event;
  }

  ngSubmit() {
    this.cvService.createCV(this.cvForm.value).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        const dialogRef = this.dialog.open(DialogNoCreateComponent);
        dialogRef.afterClosed().subscribe(result => {
          this.cvForm.reset();
          this.router.navigate(['detail-cv', this.tokenService.getIdGuest()])
        });
      } else {
        const dialogRef = this.dialog.open(DialogCreateCvComponent);
        dialogRef.afterClosed().subscribe(result => {
          this.cvForm.reset();
          this.router.navigate(['detail-cv', this.tokenService.getIdGuest()])
        });
      }
    });
  }

  addSkill() {
    const skillForm = this.fb.group({
      name: [''],
      proficiency: ['50%']
    })
    this.skills.push(skillForm);
  }

  deleteSkill(index: number) {
    this.skills.removeAt(index);
  }

  addWorkExp() {
    const workExpForm = this.fb.group({
      title: [''],
      startDate: [''],
      endDate: [''],
      content: ['']
    });
    this.workExps.push(workExpForm);
  }

  deleteWorkExp(index: number) {
    this.workExps.removeAt(index);
  }
}
