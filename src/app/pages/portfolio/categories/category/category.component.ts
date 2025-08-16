import { AfterViewInit, Component, computed, ElementRef, HostListener, inject, input, output, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { FolderComponent } from "./folder/folder.component";
import { SvgIconProviderService } from '../../../../services/svg-icon-provider.service';
import { PortfolioService } from '../../../../services/portfolio/portfolio.service';
import { CategoryInfo } from '../../../../services/portfolio/portfolio.model';
import { ProjectComponent } from "./project/project.component";
import { PortfolioSelectionStateService } from '../../../../services/state-management/portfolio-selection-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [FolderComponent, ProjectComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CategoryComponent implements AfterViewInit{
  private selectionStateService = inject(PortfolioSelectionStateService);
  private router = inject(Router);
  portfolioService = inject(PortfolioService);
  svgIconProvider = inject(SvgIconProviderService);
  selection = output<void>()
  @HostListener('click') activateSelection = () => {
    if (!this.selected())
    {
      this.selectionStateService.setSelectedCategory(this.categoryInfo());
      this.selectionStateService.setSelectedFolder(null);
      this.selectionStateService.setSelectedProject(null);
      this.selection.emit();
      this.router.navigate(['portfolio', this.selectionStateService.getSelectedCategory()?.name])
    }
  }
  elementRef = inject(ElementRef);
  host!: HTMLElement;
  categoryTreeHeight = signal('0px');
  categoryInfo = input.required<CategoryInfo>();
  selected = computed(() => {
    if (this.selectionStateService.getSelectedCategory())
    {
      return ((this.selectionStateService.getSelectedCategory() as unknown) as CategoryInfo).name === this.categoryInfo().name
    }
    return false;
  });
  
  @ViewChild('category_icon') iconRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.iconRef.nativeElement.innerHTML = this.svgIconProvider.getIcon(this.categoryInfo().icon);
    this.host = this.elementRef.nativeElement as HTMLElement;
    this.refreshCategoryHeight()
  }
  private refreshCategoryHeight()
  {
    this.categoryTreeHeight.set(this.host.children[0].children[1].scrollHeight + 'px')
  }
  emitSelection()
  {
    this.selection.emit();
  }
}
