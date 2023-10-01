import { TestBed } from '@angular/core/testing';

import { StockSocketsService } from './stock-sockets.service';

describe('StockSocketsService', () => {
  let service: StockSocketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockSocketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
