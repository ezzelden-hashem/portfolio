import { Component, HostListener, inject, input, output } from '@angular/core';
import { CategoryInfo, FolderInfo, PortfolioObjectType, ProjectInfo } from '../../../../services/portfolio/portfolio.model';
import { PortfolioSelectionStateService } from '../../../../services/state-management/portfolio-selection-state.service';

@Component({
  selector: 'app-path-segment',
  imports: [],
  templateUrl: './path-segment.component.html',
  styleUrl: './path-segment.component.css'
})
export class PathSegmentComponent {
  selectionStateService = inject(PortfolioSelectionStateService);
  selection = output<void>();
  @HostListener('click') gotoPathSegment = () => {
    this.selection.emit();
    if (this.segmentInfo()?.objectType.toFixed() === PortfolioObjectType.CategoryInfo.toFixed())
    {
      this.selectionStateService.setSelectedFolder(null);
      this.selectionStateService.setSelectedProject(null);
    }
    else if (this.segmentInfo()?.objectType.toFixed() === PortfolioObjectType.FolderInfo.toFixed())
    {
      this.selectionStateService.setSelectedProject(null);
    }
  }
  segmentInfo = input.required<CategoryInfo | FolderInfo | ProjectInfo | null>();
}
