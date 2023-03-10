import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NamespaceComponent } from './namespace/namespace.component';
import { TenantComponent } from './tenant/tenant.component';
import { MaterialModule } from './material/material.module';
import { TopicComponent } from './topic/topic.component';
import { NonPersistentTopicDialogComponent } from './non-persistent-topic-dialog/non-persistent-topic-dialog.component';
import { EditNamespaceComponent } from './edit-namespace/edit-namespace.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AvroSchemaComponent } from './avro-schema/avro-schema.component';
import { CodeEditorModule } from '@ngstack/code-editor';

@NgModule({
  declarations: [
    AppComponent,
    NamespaceComponent,
    TenantComponent,
    TopicComponent,
    NonPersistentTopicDialogComponent,
    EditNamespaceComponent,
    DashboardComponent,
    AvroSchemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    CodeEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
