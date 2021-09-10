import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PizzeriaService } from "../services/pizzeria.service";

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent{

    constructor(private pizzeriaService: PizzeriaService, private router: Router){
    }

    images = [  
        { img: "../assets/images/1.jpeg" },  
        { img: "../assets/images/3.jpeg" },  
        { img: "../assets/images/2.jpeg" },  
        { img: "../assets/images/4.jpeg" },  
        { img: "../assets/images/5.jpeg" },
      ];  
      
      slideConfig = {  
        "slidesToShow": 3,  
        "slidesToScroll": 3,  
        "dots": true,  
        "infinite": true  
      };  


}