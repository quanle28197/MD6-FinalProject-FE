import { Component, OnInit } from '@angular/core';

import {TokenService} from '../../../security/token.service';
import {UserService} from '../../service/user.service';
import {SkillService} from '../../../service/skill/skill.service';
import {CVService} from '../../../service/cv/cv.service';
import {ActivatedRoute} from '@angular/router';
import {WorkExpService} from '../../../service/workExp/work-exp.service';
import {CvDTO} from '../../../model/dto/cv-dto';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent implements OnInit {
  cv: CvDTO;

  idUser: number;

  checkRole: string;

  constructor(private tokenService: TokenService,
              private userService: UserService,
              private skillService: SkillService,
              private cvService: CVService,
              private workExpService: WorkExpService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];
    this.cvService.findByUserId(this.idUser).subscribe((data: CvDTO) => {
      this.cv = data;
    });
    for (let i = 0; i < this.tokenService.getRoleKey().length; i++) {
      if (this.tokenService.getRoleKey()[i] == "USER") {
        this.userService.getUserById(this.tokenService.getIdGuest()).subscribe(data => {
          this.checkRole = "USER";
        })
      }
    }
  }
}
