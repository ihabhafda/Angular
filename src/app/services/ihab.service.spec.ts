import { TestBed } from '@angular/core/testing';

import { IhabService } from './ihab.service';

describe('IhabService', () => {
  let service: IhabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IhabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
