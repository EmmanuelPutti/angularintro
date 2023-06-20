import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-message',
  templateUrl: './parent-message.component.html',
  styleUrls: ['./parent-message.component.less']
})
export class ParentMessageComponent implements OnInit {

  parentMessage = "Message from parent";


  constructor() { }

  ngOnInit(): void {
  }

}
