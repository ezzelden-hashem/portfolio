import { Component, ComponentRef, inject, input, ViewChild, ViewContainerRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { CategoryInfo } from '../../services/portfolio/portfolio.model';
import { ProjectCardComponent } from '../project/project-card/project-card.component';
import { FolderCardComponent } from '../folder/folder-card/folder-card.component';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  private portfolioService = inject(PortfolioService);
  @ViewChild('categoryContainer', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;
  categoryInfo = input.required<CategoryInfo>();
  ngOnInit(): void {
    this.container.clear();
    let category = this.portfolioService.getCategoryById(this.categoryInfo().id);
    for (const folder of category?.folders || [])
    {
      const componentRef: ComponentRef<FolderCardComponent> = this.container.createComponent(FolderCardComponent);
      componentRef.setInput('folder', folder);
    }
    for (const project of category?.projects || [])
    {
      const componentRef: ComponentRef<ProjectCardComponent> = this.container.createComponent(ProjectCardComponent);
      componentRef.setInput('project', project);
    }
  }
}
