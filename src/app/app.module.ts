import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module'
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';




@NgModule({
  declarations: [
    AboutComponent,
    AppComponent
  ],
  imports: [
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    BrowserModule,
    BrowserAnimationsModule,
  AppRoutingModule
  ],
  providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
