import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
 
  public stocks!: Array<Stock>;
  public stockClasses!: Object;

  constructor() { }

  ngOnInit(): void {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 5, 15),
      new Stock('Last Stock Company', 'LSC', 20, 19)
    ]
    // let diff = (this.stock.price / this.stock.previousPrice) - 1;
    // let largeChange = Math.abs(diff) > 0.01;
    // this.stockClasses = {
    //   "positive": this.stock.isPositiveChange(),
    //   "negative": !this.stock.isPositiveChange(),
    //   "large-change": largeChange,
    //   "small-change": !largeChange
    // }
  }

  toggleFavorite(event: any, index: number){
    console.log("We are toggling the favorite state for this stock", event);
    this.stocks[index].favorite = ! this.stocks[index].favorite;
  }

}
