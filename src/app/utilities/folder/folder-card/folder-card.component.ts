import { Component, computed, ElementRef, HostListener, inject, input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Folder, PortfolioObjectType } from '../../../services/portfolio/portfolio.model';
import { PortfolioSelectionStateService } from '../../../services/state-management/portfolio-selection-state.service';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';
import { SvgIconProviderService } from '../../../services/content-management/svg-provider/svg-icon-provider.service';

@Component({
  selector: 'app-folder-card',
  imports: [],
  templateUrl: './folder-card.component.html',
  styleUrl: './folder-card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FolderCardComponent {
  selectionStateService = inject(PortfolioSelectionStateService);
  svgIconProvider = inject(SvgIconProviderService);
  portfolioService = inject(PortfolioService);

  @ViewChild('folderIcon') folderIcon!: ElementRef<HTMLDivElement>;
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
  ngAfterViewInit()
  {
    this.folderIcon.nativeElement.innerHTML = this.svgIconProvider.getIcon('folder-i01');
  }
}
