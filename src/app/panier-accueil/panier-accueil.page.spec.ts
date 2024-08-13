import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanierAcuueilPage } from './panier-accueil.page';

describe('PanierAcuueilPage', () => {
  let component: PanierAcuueilPage;
  let fixture: ComponentFixture<PanierAcuueilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierAcuueilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
