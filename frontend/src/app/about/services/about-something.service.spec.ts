import { TestBed } from '@angular/core/testing';

import { AboutSomethingService } from './about-something.service';

describe('AboutSomethingService', () => {
  let service: AboutSomethingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutSomethingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
