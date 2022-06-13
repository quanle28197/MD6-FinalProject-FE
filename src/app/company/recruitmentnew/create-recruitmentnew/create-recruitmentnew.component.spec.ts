import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecruitmentnewComponent } from './create-recruitmentnew.component';

describe('CreateRecruitmentnewComponent', () => {
  let component: CreateRecruitmentnewComponent;
  let fixture: ComponentFixture<CreateRecruitmentnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecruitmentnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecruitmentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
