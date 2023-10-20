import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {Product} from "../../../shared/models/Product";
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  product: Product = {};
  id?: number;


  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getProductById(this.id);
  }

  getProductById(id?: number) {
    this.productService.getProductById(id!)
      .subscribe((product) => this.product = product)
  }

  addProductToShoppingCart() {
    this.shoppingCartService.addOrderItem(this.product);
  }

}
