import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductAddComponent } from "./product-add.component";
/*
@Injectable()
export class ProductAddDeactivate
  implements CanDeactivate<ProductAddComponent>
{
  canDeactivate(
    component: ProductAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (component.fnHasData()) 
    {
      return window.confirm(
        "No ha salvado el producto, está seguro que desea continuar?"
      );
    }

    return true;
  }
}*/