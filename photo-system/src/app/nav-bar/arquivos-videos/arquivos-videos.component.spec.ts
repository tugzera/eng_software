import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivosVideosComponent } from './arquivos-videos.component';

describe('ArquivosVideosComponent', () => {
  let component: ArquivosVideosComponent;
  let fixture: ComponentFixture<ArquivosVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivosVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivosVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
