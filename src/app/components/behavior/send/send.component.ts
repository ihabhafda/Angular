import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorService } from '../../../services/behavior.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {

  yourName: string = '';
  constructor(private behaviorService: BehaviorService) {}

  sendName(form: NgForm) {
    this.behaviorService.setName(this.yourName);
  }
}
