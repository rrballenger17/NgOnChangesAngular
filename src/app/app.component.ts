import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styles: ['.parent {background: deeppink}'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  myGreeting = 'Hello';
  myUser: {name: string} = {name: 'John'};
}