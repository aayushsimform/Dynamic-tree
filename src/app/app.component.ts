import { Component } from '@angular/core';
import { List } from './model/list.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamicTree';
  nodes: List[] = [
    {
      title: 'Item 1',
      items: [
        {
          title: 'Item 1.1',
        },
        {
          title: 'Item 1.2',
          items: [
            {
              title: 'Item 1.2.1',
              items: [
                {
                  title: 'Item 1.2.1.1',
                  
                },
                {
                  title: 'Item 1.2.2.1',
                },
              ],
            },
            {
              title: 'Item 1.2.2',
            },
          ],
        },
      ],
    },
    {
      title: 'Item 2',
      items: [
        {
          title: 'Item 2.1',
        },
        {
          title: 'Item 2.2',
          items: [
            {
              title: 'Item 2.2.1',
            },
            {
              title: 'Item 2.2.2',
            },
          ],
        },
      ],
    },
  ];
}
