import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContatoComponent } from './delete-contato.component';

describe('DeleteContatoComponent', () => {
  let component: DeleteContatoComponent;
  let fixture: ComponentFixture<DeleteContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
