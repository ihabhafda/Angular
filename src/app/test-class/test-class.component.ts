import { Component } from '@angular/core';

@Component({
  selector: 'app-test-class',
  templateUrl: './test-class.component.html',
  styleUrl: './test-class.component.css'
})
export class TestClassComponent {

  lebanon = false;
  syria = false;
  algeria = true;

  changeCountry() {
    this.lebanon = true;
    this.syria = false;
    this.algeria = false;
  }
}
