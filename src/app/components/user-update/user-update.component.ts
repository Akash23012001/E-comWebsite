import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller/seller.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  tableName:any="user"
  id:any=sessionStorage.getItem("userId")
  userData:any;

  constructor(private upuser: SellerService,private rout:Router) { }

  ngOnInit(): void {
      this.upuser.getuser(this.tableName,this.id).subscribe((res:any)=>{
        this.userData=res
        console.warn(this.userData)
      })
  }

  updateuser(val:any){
    this.upuser.userUpdate(val,this.tableName,this.id).subscribe(()=>{
      alert("Your profile is updated Succesfully  ")
      this.rout.navigate(["/home-page"])
    })
    // console.log(val)
  }


  udelete(){
    if(confirm("Are u sure ??")){
      console.log("true")
      this.upuser.dltUser(this.tableName,this.id).subscribe(()=>{
        sessionStorage.clear()
        this.rout.navigate(["/"])
      })
    }
    
  }

}
