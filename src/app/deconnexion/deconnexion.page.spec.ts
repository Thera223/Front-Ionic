import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeconnexionPage } from './deconnexion.page';

describe('DeconnexionPage', () => {
  let component: DeconnexionPage;
  let fixture: ComponentFixture<DeconnexionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeconnexionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
