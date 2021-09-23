import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { io } from "socket.io-client";
import {  orderDetail, products, review, users } from "../models/pizzeria.model";

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

    postProduct(product:products){
        const options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
        return this.http.post(`http://localhost:3000/api/products`, product, options);
    }

    //Updates - Puts

    putProduct(product:products){
        const options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
        return this.http.put(`http://localhost:3000/api/products/${product.idProduct}`, product, options);
    }

    updateOrder(_order: orderDetail[]){
        order = _order;
    }

    //Deletes
    deleteProduct(idProduct: number){
        return this.http.delete(`http://localhost:3000/api/products/${idProduct}`);
    }

    //correo
    sendEmail(url, data) {
        return this.http.post(url, data);
      }

      //bot
    public message$: BehaviorSubject<string> = new BehaviorSubject('');
  
    socket = io('http://localhost:8000');
  
    public sendMessage(message) {
      this.socket.emit('message', message);
    }
  
    public getNewMessage = () => {
      this.socket.on('message', (message) =>{
        this.message$.next(message);
      });
      
      return this.message$.asObservable();
    };
  
    sendBot(url, body) {
      return this.http.post(url, body);
    }
 
}

var order: orderDetail [] = []