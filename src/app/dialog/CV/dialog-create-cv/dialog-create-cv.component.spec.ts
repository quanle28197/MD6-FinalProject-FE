import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateCvComponent } from './dialog-create-cv.component';

describe('DialogCreateCvComponent', () => {
  let component: DialogCreateCvComponent;
  let fixture: ComponentFixture<DialogCreateCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
