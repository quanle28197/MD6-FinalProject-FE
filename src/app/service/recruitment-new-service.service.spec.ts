import { TestBed } from '@angular/core/testing';

import { RecruitmentNewServiceService } from './recruitment-new-service.service';

describe('RecruitmentNewServiceService', () => {
  let service: RecruitmentNewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitmentNewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
