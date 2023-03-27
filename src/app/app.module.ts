import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeDataListComponent } from './tree-data-list/tree-data-list.component';
import { TreeDataDetailsComponent } from './tree-data-details/tree-data-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeDataListComponent,
    TreeDataDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
