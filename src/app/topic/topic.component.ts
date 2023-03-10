import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NonPersistentTopicDialogComponent } from '../non-persistent-topic-dialog/non-persistent-topic-dialog.component';
import { TopicDataSource } from './topic.datasource';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input()
  namespace = "";

  topicDataSource: TopicDataSource;
  columnNames = ["topicName", "actions"];

  constructor(public dialog: MatDialog, private service: TopicService) {
    this.topicDataSource = new TopicDataSource(service);
  }

  ngOnInit(): void {
    console.log(`Loading topics for namespace ${this.namespace}...`);
    this.topicDataSource.loadTopics(this.namespace);
  }


  openPersistentDialog(): void {
    const dialogRef = this.dialog.open(NonPersistentTopicDialogComponent, {data: { name: '', timeout: 60 }});

    dialogRef.afterClosed().subscribe({
      next: (value) => {
        this.service.createPersistentTopic(this.namespace, value.name).subscribe({
          next: (val) => {
            console.log(`Val from create persistent topic: ${val}`);
            this.service.configureTopicRetentionTime(this.namespace, value.name, value.timeout)
          },
          error: (error) => console.log(error),
          complete: () => this.topicDataSource.loadTopics(this.namespace)
        })
      },
      complete: () => {
        console.log("persistent topic dialog closed");
      }
    })
  }

  openNonPersistentDialog(): void {
    const dialogRef = this.dialog.open(NonPersistentTopicDialogComponent, {data: { name: '', timeout: 60 }});

    dialogRef.afterClosed().subscribe({
      next: (value) => {
        console.log(`Got value ${value}`);
        this.service.createNonPersistentTopic(this.namespace, value).subscribe({
          next: (val) => console.log(`Val from create non-persistent topic: ${val}`),
          error: (error) => console.log(error)
        });
      },
      complete: () => this.topicDataSource.loadTopics(this.namespace)
    });
    
  }

}
