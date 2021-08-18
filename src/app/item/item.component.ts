import { Input, Component } from '@angular/core';
//import {Theme} from '../header/header.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() title = "";
  @Input() new: any;
}
