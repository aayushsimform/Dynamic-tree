import { Component, Input } from '@angular/core';
import { List } from '../model/list.interface';

@Component({
  selector: 'app-tree-data-list',
  templateUrl: './tree-data-list.component.html',
  styleUrls: ['./tree-data-list.component.css'],
})
export class TreeDataListComponent {
  @Input() nodes!: List[]
}
