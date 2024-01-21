import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  public qrCodeText!: string;

  table: { productName: string; productPrice: number; productQuantity: number; }[] = [];
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() { 
    this.table = this.productService.productTable;
    console.log("my Product", this.table);
  }
}
