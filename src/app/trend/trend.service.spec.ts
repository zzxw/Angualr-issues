/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrendService } from './trend.service';

describe('TrendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrendService]
    });
  });

  it('should ...', inject([TrendService], (service: TrendService) => {
    expect(service).toBeTruthy();
  }));
});
