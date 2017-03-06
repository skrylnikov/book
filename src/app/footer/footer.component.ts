import { Component } from '@angular/core';

import { InfoService } from '../shared/info.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  private version = '';
  constructor(private info: InfoService) {
    this.version = info.version;
  }
}
