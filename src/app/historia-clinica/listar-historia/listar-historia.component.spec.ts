import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHistoriaComponent } from './listar-historia.component';

describe('ListarHistoriaComponent', () => {
  let component: ListarHistoriaComponent;
  let fixture: ComponentFixture<ListarHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarHistoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
