import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouscategoriePage } from './souscategorie.page';

describe('SouscategoriePage', () => {
  let component: SouscategoriePage;
  let fixture: ComponentFixture<SouscategoriePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
