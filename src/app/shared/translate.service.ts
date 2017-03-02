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
    text=this.remove(text);
    let result=this.cashe(text);
    if(result==null){
      let url =`${this.uri}key=${this.token}&text=${text}&lang=en-ru`;
      return this.http.get(url)
        .toPromise()
        .then(x =>x.json().text[0].replace(/ /g,'_'))
        .then(x=>this.cashe(text, x));
    }
    else {
      return new Promise((resolve)=>resolve(result))
    }
  }

  private remove(text:string):string{
    return text.replace(/['".,?!]/g,'')
  }

  private cashe(text:string, result?:string){
    if(result==null){
      result = localStorage.getItem(text);
    }else{
      localStorage.setItem(text,result);
    }
    return result;
  }

}
