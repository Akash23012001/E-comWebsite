import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller/seller.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  value:number=localStorage.length

  Country:string[]=["India","Indonesia","Srilanka","Bhutan","Nepal","Dubai","Turkey"]

  CartProducts:any=[]
  ID:any=[]
  totalbillamount:number|any;
  uid:any=sessionStorage.getItem("userId")
  tableName:any="user"
  userinfo:any;
  btn:boolean=true
  constructor(private rout :Router,private user :SellerService) { }
  
  ngOnInit(): void {
    this.user.getuser(this.tableName,this.uid).subscribe((res:any)=>{
      this.userinfo=res
    })

    if(localStorage.length>=1){
      this.btn=false
    }else{
      this.btn=true
    }


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

  orderdetails(){
    // this.user.userUpdate(this.ID,"user",this.uid).subscribe(()=>{
    // })
    alert("Order Placed Succesfully")
    this.rout.navigate(["/home-page"])
  }


}
