import { ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriePage } from './categorie.page';

describe('Tab2Page', () => {
  let component: categoriePage;
  let fixture: ComponentFixture<categoriePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(categoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
