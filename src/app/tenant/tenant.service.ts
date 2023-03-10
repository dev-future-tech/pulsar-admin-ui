import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment as env } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private http: HttpClient) { }

  getAllTenants(): Observable<string[]> {
    const uri = `${env.pulsar_api}/tenants`;
    return this.http.get<string[]>(uri);
  }
}
