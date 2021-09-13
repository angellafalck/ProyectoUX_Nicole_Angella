import { Component, NgModule } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { orderDetail, products, users } from "../models/pizzeria.model";
import { PizzeriaService } from "../services/pizzeria.service";


@Component({
    templateUrl: './menu-client.component.html',
    styles: [`
        .orderDetail{
            margin-left: 20px;
            margin-bottom: 40px;
            margin-top: 40px;
        }
    `]
})
export class MenuClientComponent{
    productsList: products[][] = [];
    user: users;
    order: orderDetail[] = [];

    constructor(private pizzeriaService: PizzeriaService, 
        private router: Router,
        private routes: ActivatedRoute)
        {}

    ngOnInit(){
        this.order = this.pizzeriaService.getOrder();

        this.pizzeriaService.getUserById(this.routes.snapshot.params["idUser"])
            .subscribe( data => {
                this.user = data[0][0];
                console.log("entra");
            });

        this.pizzeriaService.getProducts().subscribe(data => {
            this.productsList = data;
            console.log(this.productsList);
            console.log(this.user);
        });
    }

    //Al clickear el botón de "Detalle" en product
    fnGoToProductDetail(){
        this.pizzeriaService.updateOrder(this.order);
    }

    //Al clickear el botón de "Ordenar" en producto
    fnAddToOrder(productData: any){

        //validación que el prod no esté en carrito ya
        let isInChart: boolean = false;
        this.order.forEach( (detail) => {
            if(detail.productName == productData.title)
            {
                this.fnAddQuantity(detail);
                isInChart = true;
                return;
            }
        })

        if(isInChart) return;

        let newOrder: orderDetail = { 
            productName: productData.title,
            price: productData.price,
            quantity: 1
        };
       // newOrder.productName = data.title;

        this.order.push(newOrder);
        console.log(newOrder);
        alert(`${productData.title} agregado al carrito`);
        
    }

    //Devuelve el total a pagar en carrito
    fnTotal(): number{
        let total: number = 0;
        this.order.forEach( (detail) => {
            total += (detail.price * detail.quantity)
        })
        return total;
    }

    //Al clickear + en detalle de orden en carrito
    fnAddQuantity(orderDetailData: any){
        this.order.forEach( (detail) => {
            if(detail.productName === orderDetailData.productName)
                detail.quantity++;
        })
    }

    //Al clickear - en detalle de orden en carrito
    fnSubsQuantity(orderDetailData: any){
        this.order.forEach( (detail) => {
            if(detail.productName === orderDetailData.productName)
                detail.quantity--;
        })
    }

    //Al clickear X en detalle de orden en carrito
    fnDelete(orderDetailData: any){
        for( var i = 0; i < this.order.length; i++){ 
            if ( this.order[i].productName === orderDetailData.productName) { 
                this.order.splice(i, 1); 
            }
        }
    }
}