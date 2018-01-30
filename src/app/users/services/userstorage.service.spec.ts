/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserstorageService } from './userstorage.service';

describe('Service: Userstorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserstorageService]
    });
  });

  it('should ...', inject([UserstorageService], (service: UserstorageService) => {
    expect(service).toBeTruthy();
  }));
});