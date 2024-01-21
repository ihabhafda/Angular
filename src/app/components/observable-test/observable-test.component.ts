import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrl: './observable-test.component.css'
})

export class ObservableTestComponent implements OnInit {
  
  second?: number;

  ngOnInit(): void {
    const counter = interval(1000);

    counter.subscribe((value: number) => {
      this.second = value;
    })
  }

//   ngOnInit(): void {
//     const counter = interval(1000);

//     counter.subscribe({
//       next: (value: number) => { this.second = value; },
//       error: () => console.error('An error occurred :'),
//       complete: () => console.log('There are no more action happen.')
//     })
//  }
}

