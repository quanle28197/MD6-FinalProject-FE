import { Component, OnInit } from '@angular/core';
import {RecuitmentNew} from '../../model/recuitment-new';
import {SearchJob} from '../../model/searchJob';
import {RecruitmentnewService} from '../../service/recruitmentnew/recruitmentnew.service';
import {CitySearchService} from '../../service/city-search/city-search.service';
import {ActivatedRoute, Router} from '@angular/router';
import {City} from '../../model/City';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  // searchjob: SearchJob[] = [];
  recruitmentCity: RecuitmentNew[] = [];
  city: City[] = [];
  data: string;
  constructor(private recruitmentService: RecruitmentnewService,
              private searchCityService: CitySearchService,
              // private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  /*getAllJob(data: string) {
    this.searchCityService.getResultJob(data).subscribe(resp => {
      this.recruitmentCity = resp;
    }, e => {
      console.log(e);
    });
  }*/
}
