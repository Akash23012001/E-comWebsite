import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller/seller.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  tableName:any="user"
  constructor(private user:SellerService,private route :Router) { }


  ngOnInit(): void {
  }

  adduser(table:any,val:any){
    this.user.adduser(table,val).subscribe(()=>{
      alert("Now You can sign in through the login page")
      setTimeout(()=>this.route.navigate(["/login"]),2000)
    })
  }

}
