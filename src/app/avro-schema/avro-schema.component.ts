import { Component, Input } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { SchemaService, SchemaType } from './schema.service';


@Component({
  selector: 'app-avro-schema',
  templateUrl: './avro-schema.component.html',
  styleUrls: ['./avro-schema.component.css']
})
export class AvroSchemaComponent {

  @Input()
  namespace = '';

  @Input()
  topic = '';

  code = [`{`,
  `    "type" : "record",`,
  `    "name" : "MyObject",`,
  `    "namespace" : "com.example.model",`,
  `    "fields" : []`,
  `}`].join('\n');

  codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: this.code
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  theme = 'vs'

  constructor(private service: SchemaService) {}

  onCodeChanged(value: any) {
    console.log('CODE', value);
    console.log(`codeModel.value: ${this.codeModel.value}`);
  }

  applySchemaToTopic(): void {
    this.service.updateTopicSchema(this.namespace, this.topic, this.codeModel.value, SchemaType.JSON).subscribe({
      next: (state) => console.log(`Success? ${state}`),
      complete: () => console.log("Done!")
    });
  }
}
