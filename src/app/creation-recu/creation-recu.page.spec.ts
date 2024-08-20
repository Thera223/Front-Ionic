import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationRecuPage } from './creation-recu.page';

describe('CreationRecuPage', () => {
  let component: CreationRecuPage;
  let fixture: ComponentFixture<CreationRecuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationRecuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
