import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BanoPage } from './bano.page';

describe('BanoPage', () => {
  let component: BanoPage;
  let fixture: ComponentFixture<BanoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
