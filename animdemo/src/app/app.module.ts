import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

//Modules for Animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './open-close/open-close.component';
import { StaggerComponent } from './stagger/stagger.component';
import { StaggerTestComponent } from './stagger-test/stagger-test.component';



@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    StaggerComponent,
    StaggerTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
