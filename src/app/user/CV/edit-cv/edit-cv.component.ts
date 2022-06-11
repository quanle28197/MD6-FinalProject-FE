import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../security/token.service';
import {UserService} from '../../service/user.service';
import {SkillService} from '../../../service/skill/skill.service';
import {CVService} from '../../../service/cv/cv.service';
import {WorkExpService} from '../../../service/workExp/work-exp.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FormArray, FormBuilder} from '@angular/forms';
import {CvDTO} from '../../../model/dto/cv-dto';
import {User} from '../../../model/user';
import {DialogEditCvComponent} from '../../../dialog/CV/dialog-edit-cv/dialog-edit-cv.component';

@Component({
  selector: 'app-edit-cv',
  templateUrl: './edit-cv.component.html',
  styleUrls: ['./edit-cv.component.scss']
})
export class EditCvComponent implements OnInit {
  user: User = {account: null, phone: '', name: ''};

  idUser: number;

  id: number;

  cvForm = this.fb.group({
    expYear: [],
    salaryExpectation: [],
    fileCV: [],
    userId: this.token.getIdGuest(),
    skills: this.fb.array([]),
    workExps: this.fb.array([])
  });

  constructor(private tokenService: TokenService,
              private userService: UserService,
              private skillService: SkillService,
              private cvService: CVService,
              private workExpService: WorkExpService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private token: TokenService
  ) {
  }

  get skills() {
    return this.cvForm.get('skills') as FormArray;
  }

  get workExps() {
    return this.cvForm.get('workExps') as FormArray;
  }

  onUpLoadAvatar(event: any) {
    this.cvForm.value.fileCV = event;
  }

  ngOnInit(): void {

    this.idUser = this.route.snapshot.params['id'];

    this.userService.getUserById(this.idUser).subscribe(data => {
      this.user = data;
    });

    this.cvService.findByUserId(this.idUser).subscribe((data: CvDTO) => {
      data.skills.forEach(item => {
        this.skills.push(this.fb.group({
          id: [''],
          name: [''],
          proficiency: ['']
        }));
      });
      data.workExps.forEach(item => {
        this.workExps.push(this.fb.group({
          id: [''],
          title: [''],
          startDate: [''],
          endDate: [''],
          content: ['']
        }));
      });
      this.cvForm.patchValue(data);
    });
  }

  onUpdate() {
    console.log(this.cvForm.value);
    this.cvService.updateCV(this.tokenService.getIdGuest(), this.cvForm.value).subscribe(data => {
      const dialogRef = this.dialog.open(DialogEditCvComponent);

      dialogRef.afterClosed().subscribe(result => {
        this.cvForm.reset();
        this.router.navigate(['detail-cv', this.tokenService.getIdGuest()])
      });
    });
  }

  addSkill() {
    const skillForm = this.fb.group({
      id: [''],
      name: [''],
      proficiency: ['50%']
    });
    this.skills.push(skillForm);
  }

  deleteSkill(index: number) {
    this.skills.removeAt(index);
  }

  addWorkExp() {
    const workExpForm = this.fb.group({
      id: [''],
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
