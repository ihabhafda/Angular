import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productTable = [
    {productName: 'Orange', productPrice: 10, productQuantity: 1},
    {productName: 'PineApple', productPrice: 20, productQuantity: 2},
    {productName: 'Fig', productPrice: 30, productQuantity: 3},
    {productName: 'Banana', productPrice: 40, productQuantity: 4},
  ];

  constructor() { }
}
