import { TestBed } from '@angular/core/testing';

import { TerminalCommandsService } from './terminal-commands.service';

describe('TerminalCommandsService', () => {
  let service: TerminalCommandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminalCommandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
