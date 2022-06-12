import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateCompanyComponent } from './dialog-create-company.component';

describe('DialogCreateCompanyComponent', () => {
  let component: DialogCreateCompanyComponent;
  let fixture: ComponentFixture<DialogCreateCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
