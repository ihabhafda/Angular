import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../../../services/behavior.service';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrl: './receive.component.css'
})
export class ReceiveComponent implements OnInit {
  
  receivedName: String = '';

  constructor(private behaviorService: BehaviorService) {}

  ngOnInit(): void {
    this.behaviorService.getName().subscribe(resultName => {
      this.receivedName = resultName;
    })
  }
}
