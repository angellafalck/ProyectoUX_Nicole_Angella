import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "src/app/common/toastr.service";
import { orderDetail, products, review } from "src/app/models/pizzeria.model";
import { PizzeriaService } from "src/app/services/pizzeria.service";

@Component({
    templateUrl: "./product-details.component.html"
})

export class ProductDetailComponent{
    product?: products;
    order: orderDetail[] = [];
    idUser: number;
    reviews: review[][] = [];
    comment: any;
    stars: any;

    constructor(private pizzeriaService: PizzeriaService, 
        private router: Router,
        private routes:ActivatedRoute,
        private toastrService: ToastrService)
    {   }

    ngOnInit(){
        this.order = this.pizzeriaService.getOrder();
        console.log(this.order);
        
        let idProd: number = +this.routes.snapshot.params["idProduct"];

        this.pizzeriaService
            .getProductById(idProd)
            .subscribe( data => {
            this.product = data[0][0];
            console.log(this.product);
            this.idUser =  +this.routes.snapshot.params["idUser"];
            });

        this.pizzeriaService.getReviewsOfProduct(idProd).subscribe(data => {
            this.reviews = data;
            console.log(this.reviews);
        });
    }

    fnAddToOrder(){
        //validación que el prod no esté en carrito ya
        let isInChart: boolean = false;
        this.order.forEach( (detail) => {
            if(detail.productName === this.product.title)
            {
                detail.quantity++;
                isInChart = true;
                return;
            }
        })

        if(!isInChart)
        {
            let newOrder: orderDetail = { 
                productName: this.product.title,
                price: this.product.price,
                quantity: 1
            };

            this.order.push(newOrder);
        }

        this.toastrService.success("agregado al carrito", `${this.product.title}`);

        //redireccionar al menú con carrito
        this.router.navigateByUrl(`${this.idUser}/menu`);
    }

    fnAddReview(dataForm: any){
        let newReview: review = {
            idReview: 0,
            idProduct: this.product.idProduct,
            idUser: this.idUser,
            comment: dataForm.comment,
            stars: dataForm.stars,
            name: ""
        };

        this.pizzeriaService.postReview(newReview).subscribe((data) => {
            this.reviews.push(data[0][0]);
            this.toastrService.success("Reseña","Reseña agregada correctamente");
            this.router.navigateByUrl(`${this.idUser}/menu`);
        });

    }

}