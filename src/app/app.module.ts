import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { WordsComponent } from './words/words.component';
import { ReadComponent } from './reader/reader.component';

import { ParagraphReaderComponent } from './reader/paragraph/paragraph.reader.component';
import { WordReadComponent } from './reader/word/word.reader.component';
import { ModalComponent } from './reader/word/modal/modal.word.reader.component';

import { TranslateService } from './shared/translate.service';
import { InfoService } from './shared/info.service';

import { SplitPipe } from './shared/split.pipe';

import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BooksComponent,
    WordsComponent,
    ReadComponent,
    WordReadComponent,
    ParagraphReaderComponent,
    SplitPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [TranslateService, InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
