import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {
  public stock!: Stock;
  constructor() {
    this.stock = new Stock('test', '', 0, 0);
   }

  ngOnInit(): void {
  }

  fillInput(event: any){
    this.stock.name = (event.target as HTMLInputElement).value;
  }

}
