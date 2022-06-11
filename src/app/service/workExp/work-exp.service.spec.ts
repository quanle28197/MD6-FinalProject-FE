import { TestBed } from '@angular/core/testing';

import { WorkExpService } from './work-exp.service';

describe('WorkExpService', () => {
  let service: WorkExpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkExpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
