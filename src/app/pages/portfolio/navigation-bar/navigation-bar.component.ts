import { Component, inject, output } from '@angular/core';
import { PortfolioSelectionStateService } from '../../../services/state-management/portfolio-selection-state.service';
import { PathSegmentComponent } from "./path-segment/path-segment.component";

@Component({
  selector: 'app-navigation-bar',
  imports: [PathSegmentComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  selectionStateService = inject(PortfolioSelectionStateService);
  selection = output<void>();
  gotoRootPath() {
    this.selectionStateService.setSelectedCategory(null);
    this.selectionStateService.setSelectedFolder(null);
    this.selectionStateService.setSelectedProject(null);
  }
  emitSelection() {
    this.selection.emit();
  }
}
