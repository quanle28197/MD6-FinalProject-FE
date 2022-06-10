import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCompanyComponent } from './web-company.component';

describe('WebCompanyComponent', () => {
  let component: WebCompanyComponent;
  let fixture: ComponentFixture<WebCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
