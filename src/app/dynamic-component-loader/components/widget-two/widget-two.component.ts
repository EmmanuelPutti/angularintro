import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetTwoComponent implements OnInit {

  @Input() name : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
