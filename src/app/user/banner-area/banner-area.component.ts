import {Component, OnInit} from '@angular/core';
import {SearchJob} from '../../model/searchJob';
import {RecruitmentnewService} from '../../service/recruitmentnew/recruitmentnew.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RecuitmentNew} from '../../model/recuitment-new';
import {City} from '../../model/City';
import {CitySearchService} from '../../service/city-search/city-search.service';
import {error} from 'protractor';
import {CitySearchComponent} from '../city-search/city-search.component';

@Component({
  selector: 'app-banner-area',
  templateUrl: './banner-area.component.html',
  styleUrls: ['./banner-area.component.css']
})
export class BannerAreaComponent implements OnInit {
  recruitmentCity: RecuitmentNew[] = [];
  city: City[] = [];
  inputData: string;

  constructor(private searchCityService: CitySearchService) {
  }

  ngOnInit() {
    this.getAllJob();
  }
  getAllJob() {
    this.searchCityService.getResultJob(this.inputData).subscribe(resp => {
      this.recruitmentCity = resp;
    }, e => {
      console.log(e);
    });
  }
}
