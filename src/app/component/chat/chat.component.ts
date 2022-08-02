import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public userChat: any;

  constructor(private route: ActivatedRoute, private socket: Socket) { }
  messages = [
    {
      user: 'ghassen',
      msg: 'hello'
    },
    {
      user: 'ghassen',
      msg: 'hello'
    },
  ];
  messageValue: string = ''
  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username')
    this.userChat = username;
    this.socket.on('SendMessage', (data: any) => {
      console.log(data)
    })
  }

  sendByEnter($event: any) {
    if ($event.target.value !== '') this.messages.push({ user: this.userChat, msg: $event.target.value }), this.messageValue = ''
  }

  sendMessage(message: string) {
    if (message !== '') this.messages.push({ user: this.userChat, msg: message }), this.messageValue = '',
      this.socket.emit('SendMessage', { user: this.userChat, message: message })
  }

  getMessage() {
    this.socket.on('SendMessage', (data: any) => {
      console.log(data)
    })

  }

}
