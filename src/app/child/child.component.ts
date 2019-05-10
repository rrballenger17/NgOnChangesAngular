import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';



@Component({
  selector: 'app-child',
  styles: ['.child {background: lightgreen}'],
  templateUrl: 'child.component.html'
})
export class ChildComponent implements OnChanges {         1
   @Input() greeting: string;
  @Input() user: {name: string};

  ngOnChanges(changes: {[key: string]: SimpleChange}) {    2

    console.log(JSON.stringify(changes, null, 2));
  }
}