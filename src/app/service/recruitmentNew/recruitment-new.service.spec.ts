import { TestBed } from '@angular/core/testing';

import { RecruitmentNewService } from './recruitment-new.service';

describe('RecruitmentNewService', () => {
  let service: RecruitmentNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitmentNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
