import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuadroFornComponent } from './recuadro-forn.component';

describe('RecuadroFornComponent', () => {
  let component: RecuadroFornComponent;
  let fixture: ComponentFixture<RecuadroFornComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuadroFornComponent]
    });
    fixture = TestBed.createComponent(RecuadroFornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
