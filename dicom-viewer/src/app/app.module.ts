import { NgModule } from '@angular/core';
import { DwvModule } from './dicom-module/dwv.module';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ DwvModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) ],
  bootstrap: [AppComponent]
})

export class AppModule {}
