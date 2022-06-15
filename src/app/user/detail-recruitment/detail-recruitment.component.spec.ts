import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecruitmentComponent } from './detail-recruitment.component';

describe('DetailRecruitmentComponent', () => {
  let component: DetailRecruitmentComponent;
  let fixture: ComponentFixture<DetailRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
