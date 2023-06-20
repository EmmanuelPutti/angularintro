import { Component, OnInit } from '@angular/core';
import { HiComponent } from '../hi/hi.component';
import { HelloComponent } from '../hello/hello.component';
import { GoodbyeComponent } from '../goodbye/goodbye.component';

@Component({
  selector: 'app-hi-hello-goodbye',
  templateUrl: './hi-hello-goodbye.component.html',
  styleUrls: ['./hi-hello-goodbye.component.less']
})
export class HiHelloGoodbyeComponent implements OnInit {

  say : any;

  constructor() { }

  ngOnInit(): void {
    this.say = HiComponent;
  }

  sayHi(){
    this.say = HiComponent;
  }

  sayHello(){
    this.say = HelloComponent;
  }

  sayGoodBye(){
    this.say = GoodbyeComponent;
  }


}
