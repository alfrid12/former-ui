import { TestBed } from '@angular/core/testing';

import { FormerApiService } from './former-api.service';

describe('FormerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormerApiService = TestBed.get(FormerApiService);
    expect(service).toBeTruthy();
  });
});
