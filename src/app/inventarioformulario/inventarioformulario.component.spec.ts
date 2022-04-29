import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioformularioComponent } from './inventarioformulario.component';

describe('InventarioformularioComponent', () => {
  let component: InventarioformularioComponent;
  let fixture: ComponentFixture<InventarioformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioformularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
