import { TestBed } from '@angular/core/testing';

import { BuyProductResolveService } from './buy-product-resolve.service';

describe('BuyProductResolveService', () => {
  let service: BuyProductResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyProductResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
