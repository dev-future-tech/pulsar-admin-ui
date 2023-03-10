import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material/material.module';

import { NamespaceComponent } from './namespace.component';
import { NamespaceService } from './namespace.service';

describe('NamespaceComponent', () => {
  let component: NamespaceComponent;
  let fixture: ComponentFixture<NamespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamespaceComponent ],
      imports: [
        MaterialModule,
        HttpClientModule
      ],
      providers: [
        NamespaceService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamespaceComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
