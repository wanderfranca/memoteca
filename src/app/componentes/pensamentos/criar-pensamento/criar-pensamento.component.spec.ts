import { CriarPensamentoComponent } from './criar-pensamento.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CriarPensamentoComponent', () => {
  let component: CriarPensamentoComponent;
  let fixture: ComponentFixture<CriarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarPensamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
