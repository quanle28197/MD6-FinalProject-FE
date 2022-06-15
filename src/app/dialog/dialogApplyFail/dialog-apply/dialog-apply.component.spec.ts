import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogApplyComponent } from './dialog-apply.component';

describe('DialogApplyComponent', () => {
  let component: DialogApplyComponent;
  let fixture: ComponentFixture<DialogApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
