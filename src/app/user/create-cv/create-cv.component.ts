import { Component, OnInit } from '@angular/core';
import {CvService} from '../../service/cv/cv.service';
import {TokenService} from '../../security/token.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {WorkExpService} from '../../service/workExp/work-exp.service';
import {SkillService} from '../../service/skill/skill.service';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.scss']
})
export class CreateCvComponent implements OnInit {
  status: string = 'Please add more information to complete your account!'
  error1: any = {
    message: 'User is exist'
  };

  constructor(private cvService: CvService,
              private workExpService: WorkExpService,
              private skillService: SkillService,
              private token: TokenService,
              private fb: FormBuilder,
              private router: Router,
              private tokenService: TokenService) { }

  ngOnInit(): void {
  }

}
