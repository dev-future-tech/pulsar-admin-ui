import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TopicDataSource } from '../topic/topic.datasource';
import { TopicService } from '../topic/topic.service';

@Component({
  selector: 'app-edit-namespace',
  templateUrl: './edit-namespace.component.html',
  styleUrls: ['./edit-namespace.component.css']
})
export class EditNamespaceComponent implements OnInit {

  @Input()
  namespace = '';

  topicDataSource: TopicDataSource;
  columnNames = ['Topic', 'Persistent']

  constructor(private topicService: TopicService) {
    this.topicDataSource = new TopicDataSource(topicService)
  }

  ngOnInit(): void {
    this.topicDataSource.loadTopics(this.namespace);
  }
}
