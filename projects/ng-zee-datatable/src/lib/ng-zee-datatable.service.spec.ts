import { TestBed } from '@angular/core/testing';

import { NgZeeDataTableService } from './ng-zee-datatable.service';

describe('NgZeeDataTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgZeeDataTableService = TestBed.get(NgZeeDataTableService);
    expect(service).toBeTruthy();
  });
});
