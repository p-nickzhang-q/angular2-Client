import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../shared/websocket.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent implements OnInit {

  constructor(
    private wsSvc: WebsocketService
  ) { }

  ngOnInit() {
    this.wsSvc.createObservableSocket('ws://localhost:8085').subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('流结束了')
    );
  }

  sendMessageToServer() {
    this.wsSvc.sendMessage('hello from client');
  }

}
