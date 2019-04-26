import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';
import { LoadingConfig, ANIMATION_TYPES } from 'ngx-loading';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [DataService]
})
export class ProductListComponent implements OnInit {
  public loading = false;
  public loadingConfig: LoadingConfig = {
      animationType: ANIMATION_TYPES.rotatingPlane,
      backdropBorderRadius: '14px',
      backdropBackgroundColour: 'rgba(0,0,0,0)',
      primaryColour: '#0000ff',
      secondaryColour: '#00ff00',
      tertiaryColour: '#ff0000'
  };

  public products: any[];
  constructor(private dataService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getProducts().subscribe(result => {
      this.products = result;
      this.loading = false;
    });
  }

  addToCart(product) {
    this.cartService.addItem({ id: product.id, name: product.name, genre: product.genre, price: product.price, quantity: 1 });
  }

  changeGenre(genre){
    this.dataService.getProductsByGenre(genre).subscribe(result => {
      this.products = result;
    });
  }

  onScroll() {
    console.log('scrolled!!');
  }

}
