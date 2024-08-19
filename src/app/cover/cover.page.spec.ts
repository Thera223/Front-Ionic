import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoverPage } from './cover.page';

describe('CoverPage', () => {
  let component: CoverPage;
  let fixture: ComponentFixture<CoverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
