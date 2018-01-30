import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListsComponent } from './users-list.component';

describe('UsersListsComponent', () => {
  let component: UsersListsComponent;
  let fixture: ComponentFixture<UsersListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
