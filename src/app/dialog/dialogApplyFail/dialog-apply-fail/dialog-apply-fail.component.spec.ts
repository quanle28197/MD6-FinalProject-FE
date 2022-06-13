import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogApplyFailComponent } from './dialog-apply-fail.component';

describe('DialogApplyFailComponent', () => {
  let component: DialogApplyFailComponent;
  let fixture: ComponentFixture<DialogApplyFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogApplyFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogApplyFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
