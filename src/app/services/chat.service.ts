
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from "socket.io-client";


@Injectable({
  providedIn: 'root',
})
export class ChatService {

  
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
    http: any;
  constructor() {}

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

  sendBot(url) {
    return this.http.post(url);
  }
  
}