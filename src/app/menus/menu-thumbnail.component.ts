import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'menu-thumbnail',
    template: `
    <mat-card >
          <mat-card-header>
            <mat-card-title>
            <h4>{{product.title}}</h4>
            </mat-card-title>
          </mat-card-header>
          <img mat-card-image src="./assets/images/{{product?.imageUrl}}" width="200" height="200">
          <mat-card-content>
            <mat-card-subtitle>
              {{product.description}}
              L. {{product?.price}}
            </mat-card-subtitle>
          </mat-card-content>
          <mat-card-actions>
              <button mat-button type="button" 
                      class="btn btn-secondary"
                      (click)="fnDetalle()"
                      >Detalle</button>
              <button mat-button type="button" 
                      class="btn btn-success" 
                      (click)="fnOrdenar()"
                      >Ordenar</button>
          </mat-card-actions>
          <mat-card-actions>
              <button mat-button *ngIf="fnCanEdit()"
                      type="button" 
                      class="btn btn-warning"
                      (click)="fnEdit()"
                      >Editar</button>
            </mat-card-actions>
    </mat-card>
    `,
    styles: [ `
        .espaciador{
            margin-left: 1em;
        }
        .colorVerde{
            color: green;
        }
        .colorNaranja{
            color: orange;
        }
    `]
})

export class MenuThumbnailComponent{

    @Input() product:any;
    @Input() idUser: number;
    @Input() idRole: number;
    @Output() evtAddOrder = new EventEmitter();
    @Output() evtProductDetail = new EventEmitter();

    constructor(private router: Router){
    }

    fnDetalle(){
      console.log("IdUser desde menuThumbnail: " + this.idUser);
      this.evtProductDetail.emit(this.product);

      //ir a detalle de producto
      if(this.idRole == 1){ //administrador
        this.router.navigateByUrl(`${this.idUser}/admin/pizzas/${this.product.idProduct}`);
      }
      else{ //cliente normal
        this.router.navigateByUrl(`${this.idUser}/pizzas/${this.product.idProduct}`);
      }
      
    }

    fnOrdenar(){
        console.log(`(thumbnail) Producto: ${this.product.title} Precio ${this.product.price}`);
        
        this.evtAddOrder.emit(this.product);
    }

    fnEdit(){
      console.log(`(thumbnail) Producto: ${this.product.title} Precio ${this.product.price}`);

      this.router.navigateByUrl(`${this.idUser}/admin/pizzas/edit/${this.product.idProduct}`);
    }

    fnCanEdit(): boolean{
      if(this.idRole === 1) return true;
      else return false;
    }

}