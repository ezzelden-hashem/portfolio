import { AfterViewInit, Component, ComponentRef, input, ViewChild, ViewContainerRef } from '@angular/core';
import { CategoryInfo } from '../../../services/portfolio/portfolio.model';
import { CategoryCardComponent } from '../category-card/category-card.component';

@Component({
  selector: 'app-category-card-wrapper',
  imports: [],
  templateUrl: './category-card-wrapper.component.html',
  styleUrl: './category-card-wrapper.component.css'
})
export class CategoryCardWrapperComponent implements AfterViewInit{
  @ViewChild('categoryCardWrapper', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;
  categoryInfoList = input.required<CategoryInfo[]>();
  ngAfterViewInit(): void {
    for (const category of this.categoryInfoList())
    {
      const componentRef: ComponentRef<CategoryCardComponent> = this.container.createComponent(CategoryCardComponent);
      componentRef.setInput('categoryInfo', category);
    }
  }
  
}
