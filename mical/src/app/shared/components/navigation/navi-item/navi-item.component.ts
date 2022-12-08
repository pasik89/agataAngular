import { Component, Input } from '@angular/core';
import { INavigationItem } from 'src/app/shared/models/navigation-config.interface';

@Component({
  selector: 'app-navi-item',
  templateUrl: './navi-item.component.html',
  styleUrls: ['./navi-item.component.scss']
})
export class NaviItemComponent {
  @Input() navigationItem: INavigationItem;
}
