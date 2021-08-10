import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {
  public stock!: Stock;
  public confirmed = false;
  constructor() {
    this.stock = new Stock('', '', 0, 0, 'NASDQ');
   }

  ngOnInit(): void {
  }

  fillInput(event: any){
    this.stock.name = (event.target as HTMLInputElement).value;
  }

  setStockPrice(price: number){
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm: NgForm){
    console.log('Stock form', stockForm.value);
    if(stockForm.valid){
      this.stock = stockForm.value.stock;
      console.log('Creating stock', this.stock);
    }
    else{
      console.log("yo this is invalid brother");
    }
  }

}
