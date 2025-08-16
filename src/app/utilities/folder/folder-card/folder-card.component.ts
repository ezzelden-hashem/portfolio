import { Component, computed, HostListener, inject, input } from '@angular/core';
import { Folder, PortfolioObjectType } from '../../../services/portfolio/portfolio.model';
import { PortfolioSelectionStateService } from '../../../services/state-management/portfolio-selection-state.service';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';

@Component({
  selector: 'app-folder-card',
  imports: [],
  templateUrl: './folder-card.component.html',
  styleUrl: './folder-card.component.css'
})
export class FolderCardComponent {
  selectionStateService = inject(PortfolioSelectionStateService);
  portfolioService = inject(PortfolioService);
  folder = input.required<Folder>();
  @HostListener('click') selectFolder = () => {
    this.selectionStateService.setSelectedFolder({
      id: this.folder().id,
      name: this.folder().name,
      title: this.folder().title,
      icon: this.folder().icon,
      objectType: PortfolioObjectType.FolderInfo
    })
  }
}
