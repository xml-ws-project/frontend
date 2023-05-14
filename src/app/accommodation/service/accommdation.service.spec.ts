/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccommdationService } from './accommdation.service';

describe('Service: Accommdation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccommdationService]
    });
  });

  it('should ...', inject([AccommdationService], (service: AccommdationService) => {
    expect(service).toBeTruthy();
  }));
});
