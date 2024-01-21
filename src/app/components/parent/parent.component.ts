import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {

  // @Input()
  public name = 'Ihab Hafda'; // berselo mn Parent lal Child 
  public  id = 5;
  
  // @Output()
  public output = ''; // betla2a mn Child lal Parent

  constructor() {}

  ngOnInit(): void{}
}
