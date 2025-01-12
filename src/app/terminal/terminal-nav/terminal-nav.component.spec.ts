import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalNavComponent } from './terminal-nav.component';

describe('TerminalNavComponent', () => {
  let component: TerminalNavComponent;
  let fixture: ComponentFixture<TerminalNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminalNavComponent]
    });
    fixture = TestBed.createComponent(TerminalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
