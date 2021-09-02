import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { DicomComponent } from './dicom.component';

describe('DwvComponent', () => {
  let component: DicomComponent;
  let fixture: ComponentFixture<DicomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DicomComponent
      ],
      imports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(DicomComponent);
      component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should init', () => {
      expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('renders the beginning of the legend', waitForAsync(() => {
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const legend = compiled.querySelector('.legend');
    expect(legend.textContent).toContain('Powered by');
  }));
});
