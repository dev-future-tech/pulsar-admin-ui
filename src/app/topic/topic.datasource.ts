import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, map, mergeMap, Observable, switchMap } from "rxjs";
import { TopicService } from "./topic.service";

export class TopicDataSource extends DataSource<string> {

    topic$ = new BehaviorSubject<string[]>([]);

    constructor(private service: TopicService) {
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<readonly string[]> {
        return this.topic$.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.topic$.complete();
    }

    loadTopics(namespace: string): void {
        this.service.loadTopicsForNamespace(namespace, false).pipe(
            switchMap(topic => {
                console.log(`Returning ${topic}`);
                return topic;
            }),
            mergeMap(topic => {
                var re = /persistent:\/\//gi;
                var topicStr = topic.replace(re, '');
                var sections = topicStr.split('/');
                var topicName = sections[sections.length-1];
                console.log(`Getting details for topic ${topicName}...`);
                return this.service.getTopicProperties(namespace, topicName).pipe(
                    map(props => {
                        let toTest = topic.concat(`props: ${JSON.stringify(props)}`);
                        console.log(`toTest: ${toTest}`);
                        return [];
                    })
                );
            }),
            map(value => {
                console.log(value);
                return value;
            })
        )
        .subscribe({
            next: (topics) => this.topic$.next(topics)
        });
    }

}