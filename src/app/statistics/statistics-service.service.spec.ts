/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StatisticsServiceService } from './statistics-service.service';

describe('StatisticsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatisticsServiceService]
    });
  });

  it('should ...', inject([StatisticsServiceService], (service: StatisticsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
