import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name:'split'
})
export class SplitPipe implements PipeTransform{
  transform(text:string): string[]{
    return text.split(' ');
  }
}
