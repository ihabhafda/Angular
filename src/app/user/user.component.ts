import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IhabService } from '../services/ihab.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  name = 'ahmad';
  location = 'lebanon';
  status = 'active';
  message = "";
  public ihabList: { name: string; dob: number; phone: number, comments: any }[] = [];

  tableData: { productName: string; productPrice: number; productQuantity: number; }[]= [];

  constructor(private router: Router,
    private productService: ProductService,
    private userService: IhabService) {}

  ngOnInit(): void {
  this.grtProduct();
  this.getIhab();
  }
  
  getIhab() {
    this.userService.getUsers().subscribe(result => {this.ihabList = result;
    console.log(result);
    })
  }

  grtProduct() {
    this.tableData = this.productService.productTable;
  }


  
  getStatus() {
    return this.status;
  }

  getMessage() {
    console.log('My new Message');
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}