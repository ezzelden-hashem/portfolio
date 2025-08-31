import { AfterViewInit, Component, ElementRef, HostListener, inject, input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { CategoryInfo } from '../../../services/portfolio/portfolio.model';
import { SvgIconProviderService } from '../../../services/content-management/svg-provider/svg-icon-provider.service';
import { PortfolioSelectionStateService } from '../../../services/state-management/portfolio-selection-state.service';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CategoryCardComponent implements AfterViewInit{
  categoryInfo = input.required<CategoryInfo>();
  svgIconProvider = inject(SvgIconProviderService);
  selectionStateService = inject(PortfolioSelectionStateService);
  @ViewChild('categoryCardIcon') iconContainer!: ElementRef<HTMLDivElement>;
  @HostListener('click') selectCategory = () => {
    this.selectionStateService.setSelectedCategory(this.categoryInfo());
  }
  ngAfterViewInit(): void 
  {
    this.iconContainer.nativeElement.innerHTML = this.svgIconProvider.getIcon(this.categoryInfo().icon);
  }
}
