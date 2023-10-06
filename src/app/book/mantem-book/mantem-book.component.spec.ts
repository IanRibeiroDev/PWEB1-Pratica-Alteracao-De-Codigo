import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemBookComponent } from './mantem-book.component';

describe('MantemBookComponent', () => {
  let component: MantemBookComponent;
  let fixture: ComponentFixture<MantemBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantemBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantemBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
