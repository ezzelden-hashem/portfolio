import { Component, inject, output } from '@angular/core';
import { CategoryComponent } from "./category/category.component";
import { SvgIconProviderService } from '../../../services/svg-icon-provider.service';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';
import { CategoryInfo } from '../../../services/portfolio/portfolio.model';

@Component({
  selector: 'app-categories',
  imports: [CategoryComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  svgIconProvider = inject(SvgIconProviderService);
  portfolioService = inject(PortfolioService);
  categories!: CategoryInfo[];
  selection = output<void>();
  ngOnInit()
  {
    this.categories = this.portfolioService.getCategoriesList();
  }
  emitSelection()
  {
    this.selection.emit();
  }
}
