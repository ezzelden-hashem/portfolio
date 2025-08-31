import { Component, inject } from '@angular/core';
import { QuickPortfolioCardComponent } from "./quick-portfolio-card/quick-portfolio-card.component";
import { PortfolioService } from '../../../services/portfolio/portfolio.service';

@Component({
  selector: 'app-quick-portfolio',
  imports: [QuickPortfolioCardComponent],
  templateUrl: './quick-portfolio.component.html',
  styleUrl: './quick-portfolio.component.css'
})
export class QuickPortfolioComponent {
  portfolioService = inject(PortfolioService);
  quickProjectsCount = 6;
  quickProjects = this.portfolioService.getRandomProjects(this.quickProjectsCount);
  
}
