import { Component, Input } from '@angular/core'

import { TranslateService } from '../../shared/translate.service'

@Component({
  selector:'word',
  templateUrl:'./word.reader.component.html',
  styleUrls:['./word.reader.component.css']
})
export class WordReadComponent{
  @Input() word:string;
  isTranslate:boolean=false;
  wordTranslate:string;

  constructor(private translateService: TranslateService){}

  translate(){
    this.isTranslate=true;
    this.translateService.translated(this.word).then(x=>this.wordTranslate=x);
  }

}
