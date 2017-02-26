import { Component, Input } from '@angular/core'

@Component({
  selector:'p-reader',
  templateUrl:'./paragraph.reader.component.html',
  styleUrls:['paragraph.reader.component.css']
})
export class ParagraphReaderComponent{
  @Input() paragraph:string;

}
