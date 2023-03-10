import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNamespaceComponent } from './edit-namespace.component';

describe('EditNamespaceComponent', () => {
  let component: EditNamespaceComponent;
  let fixture: ComponentFixture<EditNamespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNamespaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNamespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
