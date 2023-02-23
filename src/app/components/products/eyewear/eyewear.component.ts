import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller/seller.service';

@Component({
  selector: 'app-eyewear',
  templateUrl: './eyewear.component.html',
  styleUrls: ['./eyewear.component.css']
})
export class EyewearComponent implements OnInit {
  
  term:any;
  eyedata:any;
  tableName:string="eyewear"

  constructor(private eye : SellerService) { }

  ngOnInit(): void {
    this.eye.getseller(this.tableName).subscribe((rec:any)=>{
      this.eyedata=rec
  })
  }

  clickedeye(val:any){
    if(confirm("are u sure u want to add this product to the cart ?")){

      localStorage.setItem(val.id, JSON.stringify((val)))
      
    }else{
      null
    }
    
  }

  signout(){
    window.location.replace("http://localhost:4200")
  }

}
