import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './idgs.component';
import { ievnComponent } from './ievn.component';
import { IevnComponent } from './utl/ievn/ievn.component';

@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    IevnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
