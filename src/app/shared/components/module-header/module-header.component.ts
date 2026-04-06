import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module-header',
  templateUrl: './module-header.component.html',
})
export class ModuleHeaderComponent {
  @Input({ required: true }) number!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
}
