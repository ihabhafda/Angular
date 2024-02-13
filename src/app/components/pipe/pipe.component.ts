import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  // Pipe
  public firstName = 'John';
  public tittle = 'pipe video is my youtube channel';

 // Json Pipe
  public student = {
    "FullName": "ihab hafda",
    "School": "school Name",
  }

  // Date Pipe
  public myDate = new Date();
}
