import { Component, HostListener, inject, input } from '@angular/core';
import { PortfolioObjectType, Project } from '../../../services/portfolio/portfolio.model';
import { PortfolioSelectionStateService } from '../../../services/state-management/portfolio-selection-state.service';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  selectionStateService = inject(PortfolioSelectionStateService);
  portfolioService = inject(PortfolioService);
  project = input.required<Project>();
  @HostListener('click') selectProject = () => {
    this.selectionStateService.setSelectedProject({
      id: this.project().id,
      name: this.project().name,
      title: this.project().title,
      icon: this.project().icon,
      objectType: PortfolioObjectType.ProjectInfo,
      thumbnail: this.project().thumbnail
    })
  }
}
