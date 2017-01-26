import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickComponent } from './click/click.component';
import { InpComponent } from './inp/inp.component';
import { EnterComponent } from './enter/enter.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    InpComponent,
    EnterComponent,
    AddComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
