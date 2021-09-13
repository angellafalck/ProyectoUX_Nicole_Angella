import { Component, EventEmitter, Input, Output } from "@angular/core";
import { review } from "src/app/models/pizzeria.model";

@Component({
    selector: 'review-thumbnail',
    template: `
    <div class="card-header">
        <pm-star [rating]="review.stars">
        </pm-star>
    </div>
    <div class="card-body">
        <h6 class="card-title">{{review.name}}</h6>
        <p class="card-text">{{review.comment}}</p>
    </div>
    `,
    styles: [`
    `]
})
export class ReviewThumbnailComponent{
    @Input() review: review;

    constructor(){}

}