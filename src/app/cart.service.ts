import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items =[];

  constructor() { }

  addToCart(product) {
    this.items.push(product);
    console.log(this.items);
    console.log(this.items.length);
  }

  getItems() {
    return this.items;
  }

  getlength(){
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
