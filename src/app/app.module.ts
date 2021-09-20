import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRouts } from './routes';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './starting-page/login.component';
import { PizzeriaService } from './services/pizzeria.service';
import { MenuClientComponent } from './menus/menu-client.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './starting-page/signin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import { HomeComponent } from './starting-page/home.component';
import { ToastrService } from "./common/toastr.service";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatCardHarness} from '@angular/material/card/testing';
import {MatCardModule} from '@angular/material/card';
import { MenuAdminComponent } from './menus/menu-admin.component';
import { MenuThumbnailComponent } from './menus/menu-thumbnail.component';
import { ProductDetailComponent } from './menus/product-details/product-details.component';
import { OrderThumbnailComponent } from './menus/order-details/order-thumbnail.component';
import { ReviewThumbnailComponent } from './menus/product-details/review-thumbnail.component';
import { StarComponent } from './common/star.component';
import { OrderDetailssComponent } from './menus/orderdetailss.component';
import { ProductAddComponent } from './menus/products-form/product-add.component';
import { ProductEditComponent } from './menus/products-form/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    MenuClientComponent,
    HomeComponent,
    MenuAdminComponent,
    MenuThumbnailComponent,
    ProductDetailComponent,
    OrderThumbnailComponent,
    ReviewThumbnailComponent,
    StarComponent,
    OrderDetailssComponent,
    ProductAddComponent,
    ProductEditComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouts),
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    NgbModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    SlickCarouselModule,
    MatCardModule
  ],
  providers: [
    PizzeriaService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
