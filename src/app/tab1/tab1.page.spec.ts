import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Tab1Page);
=======
import { HomePage } from './tab1.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomePage);
>>>>>>> 578e8dc (code)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
