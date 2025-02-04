import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | string[]): SafeHtml {
    if (Array.isArray(value)) {
      // If value is an array, join the strings with a line break
      value = value.join('<br/>');
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
