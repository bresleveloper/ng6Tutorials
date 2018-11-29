import { TestBed } from '@angular/core/testing';

import { BasicServiceMultiService } from './basic-service-multi.service';

describe('BasicServiceMultiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicServiceMultiService = TestBed.get(BasicServiceMultiService);
    expect(service).toBeTruthy();
  });
});
