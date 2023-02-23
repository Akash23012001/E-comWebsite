import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import  { FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component'
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClothingComponent } from './components/products/clothing/clothing.component';
import { FootwearComponent } from './components/products/footwear/footwear.component';
import { CosmeticsComponent } from './components/products/cosmetics/cosmetics.component';
import { EyewearComponent } from './components/products/eyewear/eyewear.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './components/canvas/canvas.component';
import { CartsComponent } from './components/carts/carts.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MobileComponent } from './components/products/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    HomePageComponent,
    ClothingComponent,
    FootwearComponent,
    CosmeticsComponent,
    EyewearComponent,
    CanvasComponent,
    CartsComponent,
    UserUpdateComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
