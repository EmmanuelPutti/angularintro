import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetOneComponent implements OnInit {

  @Input() name : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
