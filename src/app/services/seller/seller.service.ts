import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { refCount } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  userurl="http://localhost:3000/"
  constructor(private http : HttpClient) { }

  // to get data of any type of product 

  getseller(table:any){
    return this.http.get(`${this.userurl}${table}`)
  }


  adduser(table:any,rec:any){
    return this.http.post(`${this.userurl}${table}`,rec)
  }

  // getshoedata(table:any){
  //   return this.http.get(`${this.userurl}${table}`)
  // }

  getuser(table:any,id:any){
    return this.http.get(`${this.userurl}${table}/${id}`)
  }

  userUpdate(val:any,table:any,id:any){
      return this.http.put(`${this.userurl}${table}/${id}`,val)
  }

  dltUser(table:any,id:any){
    return this.http.delete(`${this.userurl}${table}/${id}`)
  }

  

}
