import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuertaPage } from './puerta.page';

describe('PuertaPage', () => {
  let component: PuertaPage;
  let fixture: ComponentFixture<PuertaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
