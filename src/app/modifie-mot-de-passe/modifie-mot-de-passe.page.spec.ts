import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifieMotDePassePage } from './modifie-mot-de-passe.page';

describe('ModifieMotDePassePage', () => {
  let component: ModifieMotDePassePage;
  let fixture: ComponentFixture<ModifieMotDePassePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieMotDePassePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
