import { Component, Input } from '@angular/core'

@Component({
  selector:'word',
  templateUrl:'./word.reader.component.html',
  styleUrls:['./word.reader.component.css']
})
export class WordReadComponent{
  @Input() word:string;
  isTranslate:boolean=false;

  wordTranslate:string;

  translate(){
    this.isTranslate=true;
    //TODO add yandex translate
    this.wordTranslate=this.word;
  }

}
