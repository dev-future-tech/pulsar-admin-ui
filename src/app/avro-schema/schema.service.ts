import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {

  constructor(private http : HttpClient) { }

  updateTopicSchema(namespace: string, topic: string, schema: string, schemaType: SchemaType) : Observable<boolean> {
    const uri = `${env.pulsar_api}/schemas/${namespace}/${topic}/schema`;

    const schemaStr = JSON.stringify(JSON.parse(schema));
    const body = {
      "type": schemaType,
      "schema": `${schemaStr}`
    };

    console.log(`RequestBody: ${JSON.stringify(body)}`);

    return this.http.post<boolean>(uri, body, {reportProgress: true, observe: "events"}).pipe(
      tap(event => {
        if (event.type === HttpEventType.DownloadProgress) {
          console.log("download progress");
        }
        if (event.type === HttpEventType.Response) {
          console.log("donwload completed");
        }
      }),
      map(value => {
        return false;
      })
    )
  }
}

export enum SchemaType {
  AVRO = "AVRO",
  JSON = "JSON"
}
