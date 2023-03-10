import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvroSchemaComponent } from './avro-schema.component';

describe('AvroSchemaComponent', () => {
  let component: AvroSchemaComponent;
  let fixture: ComponentFixture<AvroSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvroSchemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvroSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
