import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormDetialComponent } from './form-detial/form-detial.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FormDetialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
