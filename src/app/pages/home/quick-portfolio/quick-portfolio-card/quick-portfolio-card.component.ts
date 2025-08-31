import { Component, inject, input } from '@angular/core';
import { Category, Project } from '../../../../services/portfolio/portfolio.model';
import { PortfolioService } from '../../../../services/portfolio/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-portfolio-card',
  imports: [],
  templateUrl: './quick-portfolio-card.component.html',
  styleUrl: './quick-portfolio-card.component.css'
})
export class QuickPortfolioCardComponent {
  portfolioService = inject(PortfolioService);
  router = inject(Router);
  project = input.required<Project>();
  ngOnInit()
  {
    
  }
  gotoProject()
  {
    if (this.portfolioService.getProjectPath(this.project().id))
    {
      this.router.navigate(['portfolio', ...this.portfolioService.getProjectPath(this.project().id)!])
    }
  }
}
