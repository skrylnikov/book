import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component'
import { WordsComponent } from './words/words.component'

import { RoutingModule } from './routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    BooksComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
