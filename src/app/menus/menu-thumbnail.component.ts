import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'menu-thumbnail',
    template: `
    <mat-card>
          <img src="./assets/images/{{product?.imageUrl}}" width="300" height="300">
          <mat-card-content>
            <mat-card-title>
              <h4>{{product.title}}</h4>
            </mat-card-title>
            <mat-card-subtitle>
              {{product.description}}
              L. {{product?.price}}
            </mat-card-subtitle>
            <div>
              <button type="button" class="btn btn-secondary">Detalle</button>
              <button type="button" 
                      class="btn btn-success" 
                      style="margin-left: 30%;"
                      (click)="fnOrdenar()"
                      >Ordenar</button>
            </div>
          </mat-card-content>
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
    @Output() evtAddOrder = new EventEmitter();

    constructor(private router: Router){
    }

    fnDetalle(){
      //ir a detalle de producto

      //this.router.navigate(['/clases', id]);
        //this.router.navigateByUrl(`/clases/${id}`);
    }

    fnOrdenar(){
        console.log(`(thumbnail) Producto: ${this.product.title} Precio ${this.product.price}`);
        
        this.evtAddOrder.emit(this.product);
    }

}