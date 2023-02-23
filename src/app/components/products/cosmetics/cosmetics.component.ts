import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller/seller.service';

@Component({
  selector: 'app-cosmetics',
  templateUrl: './cosmetics.component.html',
  styleUrls: ['./cosmetics.component.css']
})
export class CosmeticsComponent implements OnInit {

  term:any;
  cosdata:any;
  tableName:string="cosmetics"

  constructor(private  cosmetics :SellerService) { }

  ngOnInit(): void {

    this.cosmetics.getseller(this.tableName).subscribe((rec:any)=>{
      this.cosdata=rec
  })
  }





  clickedcosmetic(val:any){
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
