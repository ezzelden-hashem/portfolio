import { AfterViewInit, Component, computed, ElementRef, HostListener, inject, input, output, signal, ViewChild } from '@angular/core';
import { SvgIconProviderService } from '../../../../../services/svg-icon-provider.service';
import { CategoryInfo, FolderInfo } from '../../../../../services/portfolio/portfolio.model';
import { PortfolioSelectionStateService } from '../../../../../services/state-management/portfolio-selection-state.service';
import { PortfolioService } from '../../../../../services/portfolio/portfolio.service';
import { ProjectComponent } from "../project/project.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  imports: [ProjectComponent],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css'
})
export class FolderComponent implements AfterViewInit {
  private router = inject(Router);
  private svgIconProvider = inject(SvgIconProviderService);
  private selectionStateService = inject(PortfolioSelectionStateService);
  portfolioService = inject(PortfolioService);
  elementRef = inject(ElementRef);
  selection = output<void>();
  host!: HTMLElement;
  @ViewChild('folder_icon') folderIconRef!: ElementRef<HTMLDivElement>;
  @HostListener('click') activateSelection = () => {
    if (!this.selected())
    {
      this.selection.emit();
      this.selectionStateService.setSelectedFolder(this.folderInfo());
      this.selectionStateService.setSelectedProject(null);
      this.router.navigate(['portfolio',
        this.selectionStateService.getSelectedCategory()?.name,
        this.selectionStateService.getSelectedFolder()?.name,
      ]);
    }
    
  };
  parentObjectInfo = input.required<CategoryInfo>();
  folderInfo = input.required<FolderInfo>();
  selected = computed(() => {
    if (this.selectionStateService.getSelectedFolder())
    {
      return ((this.selectionStateService.getSelectedFolder() as unknown) as FolderInfo).name === this.folderInfo().name
    }
    return false;
  });
  folderTreeHeight = signal('0px');
  ngAfterViewInit(): void {
    this.folderIconRef.nativeElement.innerHTML = this.svgIconProvider.getIcon(this.folderInfo().icon);
    this.host = this.elementRef.nativeElement as HTMLElement;
    this.folderTreeHeight.set(this.host.children[0].children[1].scrollHeight + 'px');
  }
}
