import { Component, input } from '@angular/core';
import { ParagraphComponent } from "../../paragraph/paragraph.component";

@Component({
  selector: 'app-description-card',
  imports: [ParagraphComponent],
  templateUrl: './description-card.component.html',
  styleUrl: './description-card.component.css'
})
export class DescriptionCardComponent {
  linesLimit = input<ParagraphLinesLimit>('default');
  cardData = input.required<DescriptionCardData>();
}
export type DescriptionCardData = {
  icon: string;
  title: string;
  description: string;
}
export type ParagraphLinesLimit = 'default' | 'null' | number;