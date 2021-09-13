import { Component, EventEmitter, Input, Output } from "@angular/core";
import { orderDetail } from "src/app/models/pizzeria.model";

@Component({
    selector: 'order-thumbnail',
    template: `
    <button 
        type="button" 
        class="btn btn-danger"
        (click)="fnDelete()"
        >X</button>
    <span class="prodName">{{orderDetail.productName}}</span>
    <button 
        type="button" 
        class="btn btn-secondary btn-sm"
        (click)="fnSubsQuantity()"
        [disabled]="orderDetail.quantity < 2"
        >-</button>
    <span class="quantity">{{orderDetail.quantity}}</span>
    <button 
        type="button" 
        class="btn btn-secondary btn-sm"
        (click)="fnAddQuantity()"
        >+</button>
    <span class="price">{{orderDetail.price}}</span>
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