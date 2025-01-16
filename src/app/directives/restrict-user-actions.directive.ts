import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictUserActions]'
})
export class RestrictUserActionsDirective {

  // Disable right-click
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    event.preventDefault();
    alert('Right-click is disabled on this website.');
  }

  // Disable text selection
  @HostListener('selectstart', ['$event'])
  onSelectStart(event: Event): void {
    event.preventDefault();
  }

  // Disable specific key combinations
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (
      (event.ctrlKey && event.key === 'u') || // Disable Ctrl+U
      (event.ctrlKey && event.key === 'c') || // Disable Ctrl+C
      (event.ctrlKey && event.shiftKey && event.key === 'I') // Disable Ctrl+Shift+I
    ) {
      event.preventDefault();
      alert('This action is disabled.');
    }
  }

}
