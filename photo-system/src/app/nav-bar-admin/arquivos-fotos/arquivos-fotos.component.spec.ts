import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivosFotosComponent } from './arquivos-fotos.component';

describe('ArquivosFotosComponent', () => {
  let component: ArquivosFotosComponent;
  let fixture: ComponentFixture<ArquivosFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivosFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivosFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
