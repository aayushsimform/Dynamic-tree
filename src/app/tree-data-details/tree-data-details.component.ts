import { Component, Input } from '@angular/core';
import { List } from '../model/list.interface';

@Component({
  selector: 'app-tree-data-details',
  templateUrl: './tree-data-details.component.html',
  styleUrls: ['./tree-data-details.component.css'],
})
export class TreeDataDetailsComponent {
  @Input() node!: List;
  isOpen=false
  toggle() {
    this.isOpen = !this.isOpen;
   
  }
}
