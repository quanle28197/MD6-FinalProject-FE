import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../../service/search/search.service';
import {RecuitmentNew} from '../../../model/recuitment-new';

@Component({
  selector: 'app-field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.css']
})
export class FieldSearchComponent implements OnInit {
  recruitmentCompany: RecuitmentNew[] = [];

  constructor(private route: ActivatedRoute, private searchService: SearchService) {
  }

  ngOnInit() {
    this.getAllJobByField();
    this.getAllJobByCity();
  }

  getAllJobByField() {
    this.route.queryParams.subscribe(params => {
        console.log(params.query);
        this.searchService.getAllJobByField(params.query).subscribe(resp => {
          this.recruitmentCompany = resp;
          console.log(resp);
          console.log('bla');
        }, error => console.log(error));
      }
    );
  }

  getAllJobByCity() {
    this.route.queryParams.subscribe(params => {
      this.searchService.getAllJobByCity(params.query).subscribe(resp => {
        this.recruitmentCompany = resp;
      }, error => {
        console.log(error);
      });
    });
  }
}
