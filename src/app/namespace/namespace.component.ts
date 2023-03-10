import { Component, Input, OnInit } from '@angular/core';
import { NamespaceDataSource } from './namespace.datasource';
import { NamespaceService } from './namespace.service';

@Component({
  selector: 'app-namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.css']
})
export class NamespaceComponent implements OnInit {

  @Input()
  tenant = "";

  namespaceDataSource: NamespaceDataSource;
  nameSpaceHeaders = ['namespace', 'actions'];

  constructor(private namespaceService: NamespaceService) {
    this.namespaceDataSource = new NamespaceDataSource(namespaceService);
  }

  ngOnInit(): void {
    this.namespaceDataSource.getNamespaces(this.tenant);
  }


}
