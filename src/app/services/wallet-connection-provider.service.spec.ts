import { TestBed } from '@angular/core/testing';

import { WalletConnectionProviderService } from './wallet-connection-provider.service';

describe('WalletConnectionProviderService', () => {
  let service: WalletConnectionProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletConnectionProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
