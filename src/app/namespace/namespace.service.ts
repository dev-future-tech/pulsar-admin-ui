import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NamespaceService {

  constructor(private http: HttpClient) { }

  getAllNamespaces(tenant: string): Observable<string[]> {
    const uri = `${env.pulsar_api}/namespaces/${tenant}`;
    return this.http.get<string[]>(uri);
  }

  createNamespace(namespace: string, tenant: string): Observable<boolean> {
    const uri = `${env.pulsar_api}/namespaces/${tenant}/${namespace}`;

    const requestBody = {
      auth_policies: {
        namespaceAuthentication: {

        }
      }
    };

    return this.http.put<boolean>(uri, requestBody).pipe(
      map(val => {
        return true;
      }),
    );
  }
}
