import { TestBed } from '@angular/core/testing';

import { DeviceApi } from './device-api';

describe('DeviceApi', () => {
  let service: DeviceApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
