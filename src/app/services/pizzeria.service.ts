import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { orderDetail, products, review, users } from "../models/pizzeria.model";

@Injectable()
export class PizzeriaService
{
    constructor(private http: HttpClient){
    }

    //Gets
    getUsers(): Observable<users[][]>{
        return this.http.get<users[][]>("http://localhost:3000/api/users");
    }

    getUserByEmail(email: string): Observable<users>{
        return this.http.get<users>(`http://localhost:3000/api/users/${email}`);
    }

    getUserById(idUser: number): Observable<users>{
        return this.http.get<users>(`http://localhost:3000/api/user/${idUser}`);
    }

    getProducts(): Observable<products[][]>{
        return this.http.get<products[][]>("http://localhost:3000/api/products");
    }

    getProductById(idProduct: number): Observable<products>{
        return this.http.get<products>(`http://localhost:3000/api/products/${idProduct}`);
    }

    getReviewsOfProduct(idProduct: number){
        return this.http.get<review[][]>(`http://localhost:3000/api/reviews/${idProduct}`);
    }

    getOrder(): orderDetail[]{
        return order;
    }

    //Posts
    postUser(user:users): Observable<users>{
        const options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
        return this.http.post<users>("http://localhost:3000/api/users", user, options);
    }

    postReview(review:review): Observable<review>{
        const options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
        return this.http.post<review>(`http://localhost:3000/api/reviews`, review, options);
    }

    updateOrder(_order: orderDetail[]){
        order = _order;
    }

    //Deletes

    //correo
    httpGet(url) {
        return this.http.get(url);
      }
    
      httpPost(url, {}) {
        return this.http.post(url, { name: "Subrat" });
      }
    
      sendEmail(url, data) {
        return this.http.post(url, data);
      }

      getMailText(url, data) {
        return this.http.get(url, data);
      }

}

var order: orderDetail [] = []