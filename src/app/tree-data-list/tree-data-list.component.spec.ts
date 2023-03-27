import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDataListComponent } from './tree-data-list.component';

describe('TreeDataListComponent', () => {
  let component: TreeDataListComponent;
  let fixture: ComponentFixture<TreeDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
