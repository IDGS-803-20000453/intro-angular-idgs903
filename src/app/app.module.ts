import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { idgsComponent } from './idgs.component';
import { ievnComponent } from './ievn.component';
import { IevnComponent } from './utl/ievn/ievn.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { OperasBasComponent } from './utl/formularios/operas-bas/operas-bas.component';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './utl/menu/menu.component';
import { AlumnosFilterPipe } from './utl/alumnos-filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    IevnComponent,
    SumaComponent,
    MenuComponent,
    AlumnosFilterPipe,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
