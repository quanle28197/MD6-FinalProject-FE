import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecruitmentnewCompanyComponent } from './list-recruitmentnew-company.component';

describe('ListRecruitmentnewCompanyComponent', () => {
  let component: ListRecruitmentnewCompanyComponent;
  let fixture: ComponentFixture<ListRecruitmentnewCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecruitmentnewCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecruitmentnewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
