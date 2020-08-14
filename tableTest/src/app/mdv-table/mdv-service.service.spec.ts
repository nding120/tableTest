import { TestBed } from '@angular/core/testing';

import { MdvServiceService } from './mdv-service.service';

describe('MdvServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MdvServiceService = TestBed.get(MdvServiceService);
    expect(service).toBeTruthy();
  });
});
