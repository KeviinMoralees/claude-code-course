import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-callout',
  imports: [NgClass],
  templateUrl: './callout.component.html',
})
export class CalloutComponent {
  @Input({ required: true }) type!: 'good' | 'bad' | 'info' | 'warn';
  @Input({ required: true }) title!: string;
}
