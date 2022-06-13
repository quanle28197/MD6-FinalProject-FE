import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecruitmentnewCompanyComponent } from './detail-recruitmentnew-company.component';

describe('DetailRecruitmentnewCompanyComponent', () => {
  let component: DetailRecruitmentnewCompanyComponent;
  let fixture: ComponentFixture<DetailRecruitmentnewCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRecruitmentnewCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecruitmentnewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
