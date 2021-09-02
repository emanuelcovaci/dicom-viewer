import { Component, Input } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogComponent } from './dialog.component';

describe('TagsDialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  @Component({
      selector: 'app-dicom-table-data',
      template: ''
  })
  class FakeTagsTableComponent {
      @Input() data: any;
  }

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
          imports: [
              MatDialogModule
          ],
          declarations: [
              DialogComponent,
              FakeTagsTableComponent
          ],
          providers: [
              { provide: MAT_DIALOG_DATA, useValue: {} },
              { provide: MatDialogRef, useValue: {} }
          ]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(DialogComponent);
      component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should init', () => {
      expect(() => fixture.detectChanges()).not.toThrow();
  });

});
