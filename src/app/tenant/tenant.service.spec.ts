import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TenantService } from './tenant.service';


describe('TenantService', () => {
  let service: TenantService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TenantService(httpClientSpy);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all tenants', () => {
    const tenants = ['public', 'pulsar'];

    httpClientSpy.get.and.returnValue(of(tenants));

    service.getAllTenants().subscribe({
      next: (tenants) => {
        expect(tenants.length).toEqual(2);
      }
    });
  })
});
