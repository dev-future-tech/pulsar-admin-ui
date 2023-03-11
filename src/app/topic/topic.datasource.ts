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
        this.service.loadTopicsForNamespace(namespace, false)
        .subscribe({
            next: (topics) => this.topic$.next(topics)
        });
    }

}