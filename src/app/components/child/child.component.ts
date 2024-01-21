import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // yastakbel
  @Input() public nameFromParent: any; // nameFromParent => esem => mn ab lal ebn
  @Input() public idFromParent: any;

  // yo5arej
  @Output() public childEvent = new EventEmitter(); // childEvent => esem => mn ebn lal ab
  
  public eventChild() {
    this.childEvent.emit("Message From Child to Parent");
  }

}
