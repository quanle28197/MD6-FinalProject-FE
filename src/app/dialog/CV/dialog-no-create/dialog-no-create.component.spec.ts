import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNoCreateComponent } from './dialog-no-create.component';

describe('DialogNoCreateComponent', () => {
  let component: DialogNoCreateComponent;
  let fixture: ComponentFixture<DialogNoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
