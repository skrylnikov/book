import { Component, Input } from '@angular/core'

@Component({
  selector:'word',
  templateUrl:'./word.reader.component.html'
})
export class WordReadComponent{
  @Input() word:string;

}
