import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule,  //表单模块
    ReactiveFormsModule //响应式表单模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
