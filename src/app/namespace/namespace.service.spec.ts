import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NamespaceService } from './namespace.service';

describe('NamespaceService', () => {
  let service: NamespaceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new NamespaceService(httpClientSpy);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(NamespaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should retrieve namespaces for localcluster', () => {
    const response = ['test', 'example'];

    httpClientSpy.get.and.returnValue(of(response));

    service.getAllNamespaces('pulsar').subscribe({
      next: (values) => {
        expect(values.length).toBeGreaterThan(0)
      }
    });
  });

  it('should create a new namespace for the default tenant', ()=> {
    service.createNamespace('my-namespace', 'public').subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => console.log(error)
    });
  });
});
