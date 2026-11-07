import { Component } from '@angular/core';
import { ProductItemComponent } from './product-item';
import { Product } from './product';

@Component({
  selector: 'app-root',
  imports: [ProductItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly products: Product[] = [
    {
      name: 'מקרר',
      company: 'Samsung',
      description: 'מקרר משפחתי עם מקפיא תחתון',
      price: 4200,
      discountPercent: 10
    },
    {
      name: 'מכונת כביסה',
      company: 'Bosch',
      description: 'מכונת כביסה בקיבולת 8 קילוגרם',
      price: 2800,
      discountPercent: 15
    },
    {
      name: 'טלוויזיה',
      company: 'LG',
      description: 'טלוויזיה חכמה בגודל 55 אינץ׳',
      price: 3500,
      discountPercent: 5
    },
    {
      name: 'מיקרוגל',
      company: 'Sharp',
      description: 'מיקרוגל דיגיטלי עם גריל',
      price: 600,
      discountPercent: 0
    }
  ];
}