import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit,DoCheck {
  items;

  constructor(private cartService: CartService) { 
    
  }

  ngOnInit(): void {
    
  }

  ngDoCheck(){
    this.items = this.cartService.getItems();
    console.log(this.items);
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();
  }

}
