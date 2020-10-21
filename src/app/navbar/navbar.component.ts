import { Component, OnInit,DoCheck } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  clickCounter :number = 0;
  numberOfItems;
  constructor(private cartService: CartService) { }

  countClick(){
    this.clickCounter +=10;
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.numberOfItems = this.cartService.getlength();
  }

}
