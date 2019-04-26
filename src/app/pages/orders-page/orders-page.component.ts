import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  providers: [DataService]
})
export class OrderPageComponent implements OnInit {
  public items: any[] = [];
  
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('mws.user'));
    var valorTotal  = 0;
    this.dataService.getOrdersByClient(user.id).subscribe(result => {
      result.forEach(item=> {
        item.order.orderItems.forEach((element) => {
          valorTotal += element.unitPrice;
          item.valorTotal = valorTotal;
        });
      });
      this.items = result;
    });
  }
}
