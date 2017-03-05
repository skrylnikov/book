import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector:'modal',
  templateUrl:'./modal.word.reader.component.html',
  styleUrls:['./modal.word.reader.component.css']
})
export class ModalComponent{
  @Input() word:string;
  @Input() translates:string[];
  @Output() isConfirmed:EventEmitter<string> = new EventEmitter<string>();

  private click(text:string){
    this.isConfirmed.emit(text);
  }
}
