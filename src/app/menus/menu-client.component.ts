import { Component, NgModule } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { orderDetail, products, users } from "../models/pizzeria.model";
import { PizzeriaService } from "../services/pizzeria.service";
import {addElement, getElements} from "src/app/menus/detalle.js";


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
    static fnTotalStringtoEmail(): any {
        throw new Error("Method not implemented.");
    }
    productsList: products[][] = [];
    user: users;
    order: orderDetail[] = [];
    data:any;
 
   

    constructor(private pizzeriaService: PizzeriaService, 
        private router: Router,
        private routes: ActivatedRoute,
        private toastrService: ToastrService)
        {}

    ngOnInit(){
        this.order = this.pizzeriaService.getOrder();

        this.pizzeriaService.getUserById(this.routes.snapshot.params["idUser"])
            .subscribe( data => {
                this.user = data[0][0];
            });

        this.pizzeriaService.getProducts().subscribe(data => {
            this.productsList = data;
        });
    }

    //Al clickear en nav Chat
    fnGoToChat(){
        this.router.navigateByUrl(`${this.user.idUser}/chat`);
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
        this.toastrService.success("agregado al carrito", `${productData.title}`);
        
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
        this.toastrService.success("eliminado del carrito", `${orderDetailData.productName}`);
    }

    //Funcion devuelve pizzas + cantidad
    fnTotaltoEmail(){
        let productos: any="";

        this.order.forEach( (detail) => {
            productos+= detail.productName+", "+"Cantidad: " + detail.quantity+", " + "Precio: "+ detail.price+", "+" ";
            //productos+=document.write(detail.productName+", "+"Cantidad: " + detail.quantity+", " + "Precio: "+ detail.price+", " +"<br/>");
        })

        return productos;
    }

    //Funcion que devuelve string total
    fnTotalStringtoEmail(){
        let total: any="";

        total= this.fnTotaltoEmail() + " Total: "+ this.fnTotal();
        return total;
    }
    
    //Al clickear "Procesar Orden"
    fnSendOrder(){
        this.data=this.fnTotalStringtoEmail();
        addElement(this.data);

        this.router.navigateByUrl(`${this.user.idUser}/orderdetailss`);
    }
        

}



    
