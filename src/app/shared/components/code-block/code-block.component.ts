import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
})
export class CodeBlockComponent {
  private sanitizer = inject(DomSanitizer);

  protected safeCode: SafeHtml = '';

  @Input({ required: true }) set code(value: string) {
    this.safeCode = this.sanitizer.bypassSecurityTrustHtml(value.trim());
  }
}
