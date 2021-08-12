import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {
  public stockForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

   createForm(){
     this.stockForm = this.fb.group({
       name: [null, Validators.required],
       code: [null, [Validators.required, Validators.minLength(2)]],
       price: [0, [Validators.required, Validators.min(0)]]
     })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.stockForm.value);
  }
  
}
