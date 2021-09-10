import { Routes } from "@angular/router";
import { MenuClientComponent } from "./menus/menu-client.component";
import { HomeComponent } from "./starting-page/home.component";
import { LoginComponent } from "./starting-page/login.component";
import { SigninComponent } from "./starting-page/signin.component";

export const AppRouts: Routes = [
    {path: "menu", component: MenuClientComponent},
    {path: "signin", component: SigninComponent},
    {path: "login", component: LoginComponent},
    //{path: "", redirectTo: "/login", pathMatch: "full"}
    {path: "home", component:HomeComponent},
    {path: "", redirectTo: "/home", pathMatch: "full"}
];