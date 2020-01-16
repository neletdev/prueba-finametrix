import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArchivedNewsComponent } from './components/archived-news/archived-news.component';
import { GeneralNewsComponent } from './components/general-news/general-news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadNewsComponent } from './components/read-news/read-news.component';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchivedNewsComponent,
    GeneralNewsComponent,
    AddNewsComponent,
    ReadNewsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
