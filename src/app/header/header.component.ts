import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector:'header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent{
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  onClick() {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Login')
      .body(`когда-то здесь будет логи`)
      .open();
  }
}
