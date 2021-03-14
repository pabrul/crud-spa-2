import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContatoComponent } from './formulario-contato.component';

describe('FormularioContatoComponent', () => {
  let component: FormularioContatoComponent;
  let fixture: ComponentFixture<FormularioContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
