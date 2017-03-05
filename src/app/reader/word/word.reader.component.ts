import {Component, Input, transition} from '@angular/core'

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
  wordTranslates:string[];

  private isModalDialogVisible: boolean = false;


  constructor(private translateService: TranslateService){}

  translate(){

    if(!this.isTranslate){
      this.translateService.translate(this.word).then(x=>this.wordTranslate=x[0].replace(/ /g,'_'));
    }else {
      this.showDialog();
    }
    this.isTranslate=true;

  }



  public showDialog() {
    this.translateService.translate(this.word, true).then(x=>{
      this.wordTranslates=[];
      if(x[0].text!=null){
        x.forEach((translate)=> this.wordTranslates.push(translate.text))
      }
      else {
        this.wordTranslates=x;
      }
    });
    this.isModalDialogVisible = true;
  }

  public closeModal(translate:string) {
    this.isModalDialogVisible = false;
    this.wordTranslate=translate.replace(/ /g,'_');
  }
}
