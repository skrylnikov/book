import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  transform(text: string): string[] {
    let result = text.split(' ');
    let excuses: string[] = ['a', 'the', 'as', 'in', 'it', 'of', 'at', 'is', 'to', 'on',]

    for (let i = 0; i < result.length; i++) {
      excuses.forEach(element => {
        if (element === result[i].toLowerCase()) {
          result[i + 1] = `${result[i]} ${result[i + 1]}`;
          result[i] = '';
        }
      });
    }
    return result;
  }
}
