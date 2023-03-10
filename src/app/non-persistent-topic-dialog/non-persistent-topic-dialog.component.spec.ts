import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPersistentTopicDialogComponent } from './non-persistent-topic-dialog.component';

describe('NonPersistentTopicDialogComponent', () => {
  let component: NonPersistentTopicDialogComponent;
  let fixture: ComponentFixture<NonPersistentTopicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonPersistentTopicDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonPersistentTopicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
