import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './data/app-data';

import { AppComponent } from './app.component';
import { FacadeService } from './services/facade.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterNamesPipe } from './services/filter-names.pipe';

const SERVICES = [ FacadeService ];
const COMPONENTS = [AppComponent, FilterNamesPipe]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AppData),
  ],
  providers: [...SERVICES],
  bootstrap: [AppComponent],
})
export class AppModule {}
