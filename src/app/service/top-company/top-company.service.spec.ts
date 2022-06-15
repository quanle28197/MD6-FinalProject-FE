import { TestBed } from '@angular/core/testing';

import { TopCompanyService } from './top-company.service';

describe('TopCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopCompanyService = TestBed.get(TopCompanyService);
    expect(service).toBeTruthy();
  });
});
