import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface NavLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-module-nav',
  imports: [RouterLink],
  templateUrl: './module-nav.component.html',
})
export class ModuleNavComponent {
  @Input() prev: NavLink | null = null;
  @Input() next: NavLink | null = null;
}
