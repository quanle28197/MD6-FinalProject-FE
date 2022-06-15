import { TestBed } from '@angular/core/testing';

import { RecruitmentnewService } from './recruitmentnew.service';

describe('RecruitmentnewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecruitmentnewService = TestBed.get(RecruitmentnewService);
    expect(service).toBeTruthy();
  });
});
