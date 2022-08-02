import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public userChat: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username')
    this.userChat = username;
  }

}
