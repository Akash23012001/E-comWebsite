import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller/seller.service';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  term:any;

  tableShirt:string="shirts";
  tablepant:string="pants"

  dataShirt:any
  dataPant:any
  public isCollapsed = false;
  public Collapsed = true;

  constructor(private cloth :SellerService,private route: Router) {
  
   }

  ngOnInit(): void {
    
    this.cloth.getseller(this.tableShirt).subscribe((rec:any)=>{
        this.dataShirt=rec
    })
    
    this.cloth.getseller(this.tablepant).subscribe((Rec:any)=>{
        this.dataPant=Rec
    })
  }
  
  


  clickedscloth(val:any){
    //  sessionStorage.setItem()
  }


  // signout(){
  //   window.location.replace("http://localhost:4200")
  // }


  changeshirt(){
    this.Collapsed= !this.Collapsed
  }
  
  changepant(){
    this.isCollapsed= !this.isCollapsed

  }

  // getcompo(val:any){
  //   this.route.navigate([`/${val}`])
  // }

}
