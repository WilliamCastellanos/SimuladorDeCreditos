import { TestBed } from '@angular/core/testing';

import { NavSimulatorService } from './nav-simulator.service';

describe('NavSimulatorService', () => {
  let service: NavSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
