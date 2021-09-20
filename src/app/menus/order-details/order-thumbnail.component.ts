import { Component, EventEmitter, Input, Output } from "@angular/core";
import { orderDetail } from "src/app/models/pizzeria.model";

@Component({
    selector: 'order-thumbnail',
    template: `
    <button 
        type="button" 
        class="btn btn-danger"
        (click)="fnDelete()"
        style="margin-right: 10px;"
        >X</button>
    <span class="prodName" style="margin-right: 10px;">{{orderDetail.productName}}</span>
    <button 
        type="button" 
        class="btn btn-secondary btn-sm"
        (click)="fnSubsQuantity()"
        [disabled]="orderDetail.quantity < 2"
        style="margin-right: 5px;"
        >-</button>
    <span class="quantity">{{orderDetail.quantity}}</span>
    <button 
        type="button" 
        class="btn btn-secondary btn-sm"
        (click)="fnAddQuantity()"
        style="margin-left: 5px;"
        >+</button>
    <span class="price" style="margin-left: 10px;">L.{{orderDetail.price}}</span>
    `,
    styles: [`
        prodName: {
            font-weight: 900;
        }
        .quantity: {
            margin: 5px;
            font-size: x-small;
        }
        .price{
            font-size: large;
        }
    `]
})
export class OrderThumbnailComponent{
    @Input() orderDetail: orderDetail;
    @Output() evtAddQuantity = new EventEmitter();
    @Output() evtSubsQuantity = new EventEmitter();
    @Output() evtDelete = new EventEmitter();

    constructor(){}
    
    fnAddQuantity(){
        this.evtAddQuantity.emit(this.orderDetail);
    }

    fnSubsQuantity(){
        this.evtSubsQuantity.emit(this.orderDetail);
    }

    fnDelete(){
        this.evtDelete.emit(this.orderDetail);
    }

}