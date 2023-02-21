import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ClothingComponent } from './components/products/clothing/clothing.component';
import { CosmeticsComponent } from './components/products/cosmetics/cosmetics.component';
import { EyewearComponent } from './components/products/eyewear/eyewear.component';
import { FootwearComponent } from './components/products/footwear/footwear.component';

import { AuthGuard } from './cust-guard/authguard/auth.guard';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { CartsComponent } from './components/carts/carts.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"new-user",component:NewUserComponent },
  {path:"clothing",component:ClothingComponent,canActivate:[AuthGuard]},
  {path: "cosmetics",component:CosmeticsComponent,canActivate:[AuthGuard]},
  {path:"eyewear" ,component:EyewearComponent,canActivate:[AuthGuard]},
  {path: "footwear",component:FootwearComponent,canActivate:[AuthGuard] },
  {path: "userupdate",component:UserUpdateComponent,canActivate:[AuthGuard] },

  {path:"home-page",component:HomePageComponent,canActivate:[AuthGuard]},
  {path:"cart",component:CartsComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
