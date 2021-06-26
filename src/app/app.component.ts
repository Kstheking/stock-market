import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = 'stock-market';

  public stockObj!: Stock;
  ngOnInit(): void{
    this.stockObj = new Stock('Test stock company', 'TSC', 35, 30);
  }

  toggly(stock: Stock){
    console.log("favorite toggle triggered for \n" , stock);
    this.stockObj.favorite = !this.stockObj.favorite;
  }
}
