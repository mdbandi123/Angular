import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { BlankComponent } from './blank/blank.component';
import { Article4Component } from './article4/article4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    Article1Component,
    Article2Component,
    Article3Component,
    BlankComponent,
    Article4Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
