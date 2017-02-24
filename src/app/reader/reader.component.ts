import { Component } from '@angular/core'

@Component({
  templateUrl:'./reader.component.html',
  styleUrls:['./reader.component.css']
})
export class ReadComponent{
  stroka = "Все началось примерно 6 лет назад, когда я познакомился с node.js. Около 3 лет назад я начал использовать node.js на проектах вместе с замечательной библиотекой express.js (на wiki она названа каркасом приложений, хотя некоторые могут называть express фреймворком или даже пакетом). Express сочетает в себе node.js http сервер и систему промежуточного ПО, созданную по образу каркаса Sinatra из Ruby."
}
