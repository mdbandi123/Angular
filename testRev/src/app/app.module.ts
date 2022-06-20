import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotHomeComponent } from './not-home/not-home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { MyserviceService } from './myservice.service';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpclientService } from './httpclient.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotHomeComponent,
    PathNotFoundComponent,
    HttpclientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService, HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
