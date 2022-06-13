import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecruitmentnewCompanyComponent } from './update-recruitmentnew-company.component';

describe('UpdateRecruitmentnewCompanyComponent', () => {
  let component: UpdateRecruitmentnewCompanyComponent;
  let fixture: ComponentFixture<UpdateRecruitmentnewCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRecruitmentnewCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecruitmentnewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
