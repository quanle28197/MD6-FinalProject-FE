import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsSearchComponent } from './chips-search.component';

describe('ChipsSearchComponent', () => {
  let component: ChipsSearchComponent;
  let fixture: ComponentFixture<ChipsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
