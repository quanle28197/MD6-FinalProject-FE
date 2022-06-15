import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockUnlockRecruimentComponent } from './lock-unlock-recruiment.component';

describe('LockUnlockRecruimentComponent', () => {
  let component: LockUnlockRecruimentComponent;
  let fixture: ComponentFixture<LockUnlockRecruimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockUnlockRecruimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockUnlockRecruimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
