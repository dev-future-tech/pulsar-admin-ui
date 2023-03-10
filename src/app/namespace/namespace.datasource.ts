import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { NamespaceService } from "./namespace.service";

export class NamespaceDataSource extends DataSource<string> {

    private loading$ = new BehaviorSubject<boolean>(false);
    private namespace$ = new BehaviorSubject<string[]>([]);

    constructor(private namespaceService: NamespaceService) {
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<readonly string[]> {
        return this.namespace$.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.loading$.complete();
        this.namespace$.complete();
    }

    getNamespaces(tenant: string): void {
        this.namespaceService.getAllNamespaces(tenant).subscribe({
            next: (results) => this.namespace$.next(results),
        });
    }
}