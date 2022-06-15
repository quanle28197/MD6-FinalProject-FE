import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentNewComponent } from './recruitment-new.component';

describe('RecruitmentNewComponent', () => {
  let component: RecruitmentNewComponent;
  let fixture: ComponentFixture<RecruitmentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
