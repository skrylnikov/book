import { Injectable } from '@angular/core'

import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TranslateService{

  token= 'trnsl.1.1.20170122T140228Z.315d034ad2b621da.dcbade2e787cec10b69e4788d710bdf2f5172f82';
  uri='https://translate.yandex.net/api/v1.5/tr.json/translate?';

  constructor(private http:Http){

  }

  public translated(text: string) {
  return this.http.get(`${this.uri}key=${this.token}&text=${this.remove(text)}&lang=en-ru`)
    .toPromise()
    .then(x => x = x.json().text[0]);
  }

  private remove(text:string):string{
    return text.replace(/['".,?!]/g,'')
  }

}
