import { Component, inject } from '@angular/core';
import { QuickPortfolioCardComponent } from './quick-portfolio-card/quick-portfolio-card.component';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';
import { Project } from '../../../services/portfolio/portfolio.model';
import { project_password_wallet } from '../../../services/portfolio/mobile-app/password-wallet.project';

@Component({
  selector: 'app-quick-portfolio',
  imports: [QuickPortfolioCardComponent],
  templateUrl: './quick-portfolio.component.html',
  styleUrl: './quick-portfolio.component.css',
})
export class QuickPortfolioComponent {
  portfolioService = inject(PortfolioService);
  mustContains: Project[] = [project_password_wallet];
  quickProjectsCount = 5;
  quickProjects = this.portfolioService.getRandomProjects(
    this.quickProjectsCount,
    this.mustContains
  );
}
