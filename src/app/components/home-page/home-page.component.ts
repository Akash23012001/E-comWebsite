import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller/seller.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  // standalone: true,
	// imports: [ NgIf],
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  term:any
  tableName:string="sale";
  saledata:any;

  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [3, 6, 9, 12];

  value:number=localStorage.length
  constructor(private route:Router,private sale:SellerService) { }

  ngOnInit(): void {

    this.sale.getseller(this.tableName).subscribe((rec:any)=>{
      this.saledata=rec
  })


  }
  pic1=`https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`
  pic2=`https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80`
  pic3=`https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80`
  pic4=`https://images.unsplash.com/photo-1633793566063-52465a148cc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`
  images = [this.pic1,this.pic2,this.pic3,this.pic4].map((n) => n);


  signout(){
    window.location.replace("http://localhost:4200")
  }

  getcompo(comname:any){
    this.route.navigate([`/${comname}`])
  }

  clickedsale(val:any){
    localStorage.setItem(val.id, JSON.stringify((val)))
  }

  // signout(){
  //   window.location.replace("http://localhost:4200")
  // }

  onTableDataChange(event: any) {
    this.page = event;
    // this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    // this.fetchPosts();
  }

}
