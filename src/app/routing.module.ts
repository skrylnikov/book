import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { BooksComponent } from './books/books.component'
import { WordsComponent } from './words/words.component'

const routes: Routes = [
  { path: '', redirectTo:'/books', pathMatch: 'full'},
  { path: 'books', component:BooksComponent},
  { path: 'words', component:WordsComponent },
  { path: 'about', component:AboutComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RoutingModule{

}
