import { Injectable } from '@angular/core'

import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TranslateService{

  private TransalteToken= 'trnsl.1.1.20170122T140228Z.315d034ad2b621da.dcbade2e787cec10b69e4788d710bdf2f5172f82';
  private TranslateUri='https://translate.yandex.net/api/v1.5/tr.json/translate?';

  private DictionaryToken='dict.1.1.20170305T130201Z.2554c112ec72330d.d69305e3c1764a48a7f41ff1e996b392f0fbce55';
  private DictionaryUri='https://dictionary.yandex.net/api/v1/dicservice.json/lookup?';

  constructor(private http:Http){

  }

  public translate(text:string, isDictionary=false){
    if(isDictionary){
      return this._dictionary(text);
    }
    else {
      return this._translate(text);
    }
  }

  private _translate(text:string){
    let url=`${this.TranslateUri}key=${this.TransalteToken}&text=${text}&lang=en-ru`;
    return this.http.get(url)
      .toPromise()
      .then(x=>x.json().text)
  }

  private _dictionary(text:string){
    let url=`${this.DictionaryUri}key=${this.DictionaryToken}&text=${text}&lang=en-ru`;
    return this.http.get(url)
      .toPromise()
      .then(x=>x.json().def)
      .then(x=>{
        if(x.length>0){
          let y=[];
          x.forEach((items)=>items.tr.forEach((item)=>y.push(item)));
          return y
        }
        else {
          return this._translate(text)
        }
      });
  }

}
