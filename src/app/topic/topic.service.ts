import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  loadTopicsForNamespace(namespace: string, nonPersistent: boolean): Observable<string[]> {
    let state = "persistent";

    if (nonPersistent) {
      state = "non-persistent"
    }
    const uri = `${env.pulsar_api}/${state}/${namespace}`;
    console.log(`Calling uri ${uri}`);
    return this.http.get<string[]>(uri);
  }

  createPersistentTopic(namespace: string, topicName: string): Observable<boolean> {
    return this.createTopic(namespace, topicName, true);
  }

  configureTopicRetentionTime(namespace: string, topicName: string, retentionTime: number): Observable<boolean> {
    const uri = `${env.pulsar_api}/persistent/${namespace}/${topicName}/retention`;
    const retentionConfig = {
      "retentionTimeInMinutes": retentionTime
    };

    return this.http.post<boolean>(uri, retentionConfig).pipe(
      map(() => true),
      catchError((err, caught) => of(false))
    );
  }

  createNonPersistentTopic(namespace: string, topicName: string): Observable<boolean> {
    return this.createTopic(namespace, topicName, false);
  }

  private createTopic(namespace: string, topicName: string, persistent: boolean) : Observable<boolean> {
    const state = persistent? "persistent" : "non-persistent";
    const uri = `${env.pulsar_api}/${state}/${namespace}/${topicName}`;
    this.http.put(uri, { name: topicName }).subscribe({
      error: (error) => {
        throw error;
      }
    });
    return of(true);
  }

  getTopicProperties(namespace: string, topic: string): Observable<any> {
    const uri = `${env.pulsar_api}/persistent/${namespace}/${topic}/properties`;
    return this.http.get(uri).pipe(
      tap(value => {
        console.log(JSON.stringify(value));
      })
    );
  }
}
