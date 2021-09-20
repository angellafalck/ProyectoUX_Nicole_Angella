import { Routes } from "@angular/router";
import { MenuAdminComponent } from "./menus/menu-admin.component";
import { MenuClientComponent } from "./menus/menu-client.component";
import { ProductDetailComponent } from "./menus/product-details/product-details.component";
import { OrderDetailssComponent } from "./menus/orderdetailss.component";
import { HomeComponent } from "./starting-page/home.component";
import { LoginComponent } from "./starting-page/login.component";
import { SigninComponent } from "./starting-page/signin.component";
import { ProductAddComponent } from "./menus/products-form/product-add.component";
import { ProductEditComponent } from "./menus/products-form/product-edit.component";

export const AppRouts: Routes = [
    {path: ":idUser/admin/pizzas/edit/:idProduct", component:ProductEditComponent},
    {path: ":idUser/admin/pizzas/new", component:ProductAddComponent},
    {path: ":idUser/admin/pizzas/:idProduct", component: ProductDetailComponent},
    {path: ":idUser/pizzas/:idProduct", component: ProductDetailComponent},
    {path: ":idUser/admin/menu", component: MenuAdminComponent},
    {path: ":idUser/menu", component: MenuClientComponent},
    {path: ":idUser/admin/orderdetailss", component:OrderDetailssComponent},
    {path: ":idUser/orderdetailss", component:OrderDetailssComponent},
    {path: "signin", component: SigninComponent},
    {path: "login", component: LoginComponent},
    {path: "home", component:HomeComponent},
    {path: "", redirectTo: "/home", pathMatch: "full"}
];