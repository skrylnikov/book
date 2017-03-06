import { Component } from '@angular/core'

import { InfoService } from'../shared/info.service'

@Component({
  templateUrl:'./about.component.html'
})
export class AboutComponent{
  private version='';

  constructor(private info: InfoService){
    this.version=info.version;
  }
}
