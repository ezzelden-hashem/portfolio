import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mobile-app',
  imports: [],
  templateUrl: './mobile-app.component.html',
  styleUrl: './mobile-app.component.css'
})
export class MobileAppComponent {
  templateData = input.required<MobileAppTemplateData>();
}
export type MobileAppTemplateData = {
  title: string;
  iconUrl: string;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  gitHubLink: string;
  downloadLink: string;
}