import { Component } from '@angular/core';
import { DescriptionCardComponent } from '../../utilities/cards/description-card/description-card.component';
import { AboutPageContent } from '../../services/content-management/content-management-data/about-page.content';
import { AboutSummaryComponent } from './about-summary/about-summary.component';
import { QuickInfoComponent } from './quick-info/quick-info.component';
import { AboutExperienceComponent } from './about-experience/about-experience.component';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { AboutSkillsComponent } from './about-skills/about-skills.component';
import { FooterComponent } from "../home/footer/footer.component";

@Component({
  selector: 'app-about',
  imports: [
    DescriptionCardComponent,
    AboutSummaryComponent,
    QuickInfoComponent,
    AboutExperienceComponent,
    AboutHeaderComponent,
    AboutSkillsComponent,
    FooterComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  pageContent = AboutPageContent;
}
