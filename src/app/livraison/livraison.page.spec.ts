import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivraisonPage } from './livraison.page';

describe('LivraisonPage', () => {
  let component: LivraisonPage;
  let fixture: ComponentFixture<LivraisonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
