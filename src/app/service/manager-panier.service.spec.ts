import { TestBed } from '@angular/core/testing';

import { ManagerPanierService } from './manager-panier.service';

describe('ManagerPanierService', () => {
  let service: ManagerPanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerPanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});