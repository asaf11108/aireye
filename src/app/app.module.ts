import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { RecordsComponent } from './components/records/records.component';
import { RecordComponent } from './components/record/record.component';
import { RecordDetailsComponent } from './components/record-details/record-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterRecordsPipe } from './pipes/filer-records.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    RecordComponent,
    RecordDetailsComponent,
    FilterRecordsPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
