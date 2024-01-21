import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  firstName = 'Ihab';
  active = true;

  datalist = [
    {name: 'Ihab', code: 165, country: 'Lebanon'},
    {name: 'Ahmad', code: 458, country: 'Syria'},
    {name: 'Youssef', code: 998, country: 'Algeria'},
  ];
  
  name = 'Wael';

  constructor(private router: Router) {

  }

  goToUser() {
    this.router.navigate(['/users']);
  }
  
}
