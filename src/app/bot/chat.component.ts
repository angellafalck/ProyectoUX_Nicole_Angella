import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ChatService } from "../services/chat.service";
import { PizzeriaService } from "../services/pizzeria.service";

@Component({
    selector: 'chatComponent',
    templateUrl: './chat.component.html',
    
})
export class ChatComponent{
 
    newMessage: string;
    messageList: string[] = [];

    idUser: number;
    isAdmin: boolean;
  
    constructor(private chatService: PizzeriaService,        private router: Router,
        private routes: ActivatedRoute){

    }
    ngOnInit(){

        this.chatService.getNewMessage().subscribe((message: string) => {
          this.messageList.push(message);
        })
      }
    
      sendMessage() {
        this.chatService.sendMessage(this.newMessage);
        this.newMessage = '';
      }

      
}