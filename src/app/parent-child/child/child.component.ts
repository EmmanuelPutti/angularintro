import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {

  @Input() message : string | undefined;  

  @Input() count : number;
  
  @Output()
  countEmitter : EventEmitter<number> = new EventEmitter();

  constructor(private dateService : DataService) {}

  ngOnInit(): void {
    this.dateService.changeName('Balloons');
  }

  increment(){
    this.count++;
    this.countEmitter.emit(this.count);
  }

  decrement(){
     this.count--;
    this.countEmitter.emit(this.count);
  }

}
