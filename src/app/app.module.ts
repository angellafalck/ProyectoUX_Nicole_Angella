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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    MenuClientComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouts),
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [
    PizzeriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
