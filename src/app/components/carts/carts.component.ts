import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  CartProducts:any=[]
  ID:any=[]
  totalbillamount:number|any;

  constructor(private rout :Router) { }
  
  ngOnInit(): void {
    for(let i=0;i < localStorage.length;i++){

      this.ID.push(JSON.parse(localStorage.key(i)!))

    }
    for(let j of this.ID){
      this.CartProducts.push(JSON.parse(localStorage.getItem(j)!))
      
      console.log(this.CartProducts)
    }
    let amount=0
    for(let p of this.CartProducts){
      amount+=p.price
    }
    this.totalbillamount=amount
    console.warn(this.totalbillamount)
  }



  deleterecord(id:any){
      localStorage.removeItem(id)
      window.location.reload()
  }

}
