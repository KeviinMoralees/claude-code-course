import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-concept-card',
  templateUrl: './concept-card.component.html',
})
export class ConceptCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
