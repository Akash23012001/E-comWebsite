import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller/seller.service';


@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {

  // cart:any;

  term:any;
  shoedata:any;
  tableName:string="footwear"
  constructor(private shoe : SellerService) { }

  ngOnInit(): void {
    // to get shoe data 
      this.shoe.getseller(this.tableName).subscribe((rec:any)=>{
          this.shoedata=rec
      })
  }

  clickedsShoe(val:any){
    if(confirm("are u sure u want to add this product to the cart ?")){

      localStorage.setItem(val.id, JSON.stringify((val)))
      
    }else{
      null
    }
    //  this.cart=  JSON.parse(localStorage.getItem(val.id)!)
    //  console.log(this.cart)
    //  this.cart= JSON.parse(localStorage.getItem(`${val.id}`))
  }


  signout(){
    window.location.replace("http://localhost:4200")
  }

  // cartvalues(shoeProd:any){
  //   localStorage.setItem(`${shoeProd.id}`,shoeProd)
  // }

}
