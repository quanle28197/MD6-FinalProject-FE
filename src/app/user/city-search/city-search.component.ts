import { Component, OnInit } from '@angular/core';
import {RecuitmentNew} from '../../model/recuitment-new';
import {Search} from '../../model/search';
import {RecruitmentnewService} from '../../service/recruitmentnew/recruitmentnew.service';
import {CitySearchService} from '../../service/city-search/city-search.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  recruitment: RecuitmentNew [] = [];
  searchCity: Search [] = [];
  constructor(private recruitmentService: RecruitmentnewService,
              private search: CitySearchService) { }

  ngOnInit() {
    this.getAllRecruitment();
  }
  getAllRecruitment() {
    this.recruitmentService.searchCity().subscribe(recruitment => {
      this.recruitment = recruitment;
    }, error => {
      console.log(error);
    });
  }
}
