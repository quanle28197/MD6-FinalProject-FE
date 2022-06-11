import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCvComponent } from './dialog-edit-cv.component';

describe('DialogEditCvComponent', () => {
  let component: DialogEditCvComponent;
  let fixture: ComponentFixture<DialogEditCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
