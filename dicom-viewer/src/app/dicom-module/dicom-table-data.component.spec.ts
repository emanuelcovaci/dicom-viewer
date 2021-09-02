import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { DicomTableDataComponent } from './dicom-table-data.component';

describe('TagsTableComponent', () => {
  let component: DicomTableDataComponent;
  let fixture: ComponentFixture<DicomTableDataComponent>;

  // eslint-disable-next-line
  @Component({ selector: 'mat-paginator', template: '' })
  class FakePaginatorComponent {
      @Input() pageSizeOptions: any;
  }

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
          imports: [
              BrowserAnimationsModule,
              FormsModule,
              MatInputModule,
              MatFormFieldModule,
              MatTableModule
          ],
          declarations: [
              DicomTableDataComponent,
              FakePaginatorComponent
          ]
      }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(DicomTableDataComponent);
      component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should init', () => {
      expect(() => fixture.detectChanges()).not.toThrow();
  });

});
