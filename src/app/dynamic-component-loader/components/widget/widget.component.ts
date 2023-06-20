import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetOneComponent } from '../widget-one/widget-one.component';
import { WidgetTwoComponent } from '../widget-two/widget-two.component';

const componentsConfig = [
  {
    component : () => import('../widget-one/widget-one.component').then(one => one.WidgetOneComponent) ,
    inputs : {name : 'Straw berry'},
  },
  {
    component : () => import('../widget-two/widget-two.component').then(one => one.WidgetTwoComponent) ,
    inputs : {name : 'Pine'},
  }
]


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less']
})
export class WidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('widget',{read: ViewContainerRef}) widget!: ViewContainerRef;

  createComponent(){
    this.widget.clear();

    const widgetOne : any = this.widget.createComponent(WidgetOneComponent);
    const widgetTwo : any = this.widget.createComponent(WidgetTwoComponent);

    widgetOne.instance.name = "Apple";
    widgetTwo.instance.name = "Mango";

    // above angular 14.1.0 version
    //widgetOne.setInput('name', 'Apple');
    //widgetOne.setInput('name', 'Mango');
  }


  createComponentsBasedOnConfig(){
    this.widget.clear();
    componentsConfig.forEach(async componentsConfig => {
      const componenInstance = await componentsConfig.component();
      const widgetOneRef = this.widget.createComponent(componenInstance);
      Object.entries(componentsConfig.inputs).forEach(([key,value]) =>{
        widgetOneRef.instance.name = value;
      })
    });
  }

}
