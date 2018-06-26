/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CodeServiceService } from './code-service.service';

describe('CodeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeServiceService]
    });
  });

  it('should ...', inject([CodeServiceService], (service: CodeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
