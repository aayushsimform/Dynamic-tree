import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDataDetailsComponent } from './tree-data-details.component';

describe('TreeDataDetailsComponent', () => {
  let component: TreeDataDetailsComponent;
  let fixture: ComponentFixture<TreeDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
