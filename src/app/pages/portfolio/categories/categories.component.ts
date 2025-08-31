import { Component, ElementRef, inject, output, ViewChild } from '@angular/core';
import { CategoryComponent } from "./category/category.component";
import { SvgIconProviderService } from '../../../services/content-management/svg-provider/svg-icon-provider.service';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';
import { CategoryInfo } from '../../../services/portfolio/portfolio.model';

@Component({
  selector: 'app-categories',
  imports: [CategoryComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  private hostRef: ElementRef<HTMLElement> = inject(ElementRef);
  svgIconProvider = inject(SvgIconProviderService);
  portfolioService = inject(PortfolioService);
  categories!: CategoryInfo[];
  selection = output<void>();
  ngOnInit()
  {
    this.categories = this.portfolioService.getCategoriesList();
    // this.hostRef.nativeElement.style.left = '5px'
  }
  ngAfterViewInit()
  {
    
  }
  emitSelection()
  {
    this.selection.emit();
  }
}
