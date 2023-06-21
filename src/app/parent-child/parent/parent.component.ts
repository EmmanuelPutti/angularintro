import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit {

  parentMessage = "Hello Child!";
  parentCount = 10;
  name : string;
  
  @ViewChild(ChildComponent) childComponent : ChildComponent;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.name.subscribe(result =>{
      console.info(result);
      this.name = result;
    });
  }

  countChangedHandler(count : number){
    this.parentCount = count;
  }

  parentIncrement(){
    this.childComponent.increment();
  }

  parentDecrement(){
    this.childComponent.decrement();
  }

}
