import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-message',
  templateUrl: './child-message.component.html',
  styleUrls: ['./child-message.component.less']
})
export class ChildMessageComponent implements OnInit {

  @Input() message : string;

  constructor() { }

  ngOnInit(): void {
  }

}
