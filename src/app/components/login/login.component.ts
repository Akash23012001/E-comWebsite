import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/cust-guard/authguard/auth.guard';
import { SellerService } from 'src/app/services/seller/seller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidUser:string|undefined|null

  User:any;
  tableName="user"
  constructor(private user:SellerService,private route:Router,private guard :AuthGuard) { }

  ngOnInit(): void {
    // this.user.getseller().subscribe((users:any)=>{
    //   this.User=users
    //   console.log(this.User)
    // })
    this.user.getseller(this.tableName).subscribe((val:any)=>{
      this.User=val
      // console.log(this.User)
  })
  }


  getlogin(value:any){
   this.User.forEach((element:any) => {
      if((value.Name==element.Name) && (value.password == element.password)){
        this.invalidUser=null
        this.route.navigate(["/home-page"])
        sessionStorage.setItem("userId",element.id)
          console.warn("valid user")  

      }else{
        // return alert("Not a existing user !! please create an account.....");
        this.invalidUser='Not a existing user !! please create an account.....'
        // alert(this.invalidUser)
        setTimeout(()=>{this.invalidUser=undefined},2000) 
      } 
      
   });

    
  }

}
