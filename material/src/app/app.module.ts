import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CheckboxComponent,
    SelectComponent,
    SliderComponent,
    SnackbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
