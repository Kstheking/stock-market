import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {
 
  @Input() public stock!: Stock;
  @Output() toggleFavorite!: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
   }

  onToggleFavorite(event: any){
    console.log("We are toggling the favorite state for this stock", event);
    this.toggleFavorite.emit(this.stock);
  }

}
