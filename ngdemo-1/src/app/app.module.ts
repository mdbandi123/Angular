import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GradebookComponent } from './gradebook/gradebook.component';
import { FormsModule } from '@angular/forms'; //forms module

@NgModule({
  declarations: [
    AppComponent,
    GradebookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //forms module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
