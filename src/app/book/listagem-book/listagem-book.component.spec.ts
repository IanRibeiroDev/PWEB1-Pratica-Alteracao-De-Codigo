import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemBookComponent } from './listagem-book.component';

describe('ListagemBookComponent', () => {
  let component: ListagemBookComponent;
  let fixture: ComponentFixture<ListagemBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
