import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-super-parent',
  templateUrl: './super-parent.component.html',
  styleUrls: ['./super-parent.component.less']
})
export class SuperParentComponent implements OnInit {

  name : string;
  
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.name.subscribe(result =>{
      console.info(result);
      this.name = result;
    });
  }
}
