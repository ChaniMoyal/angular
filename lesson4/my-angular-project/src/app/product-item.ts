import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html'
})
export class ProductItemComponent {
  @Input() product!: Product;
  get discountAmount(): number {
  return this.product.price * this.product.discountPercent / 100;
}

get priceAfterDiscount(): number {
  return this.product.price - this.discountAmount;
}
}