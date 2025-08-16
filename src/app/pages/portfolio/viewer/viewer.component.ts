import { Component, ComponentRef, effect, inject, input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { PortfolioSelectionStateService } from '../../../services/state-management/portfolio-selection-state.service';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';
import { ProjectComponent } from '../../../utilities/project/project.component';
import { FolderComponent } from '../../../utilities/folder/folder.component';
import { CategoryComponent } from '../../../utilities/category/category.component';
import { Subscription } from 'rxjs';
import { CategoryInfo, FolderInfo, ProjectInfo } from '../../../services/portfolio/portfolio.model';
import { CategoryCardWrapperComponent } from '../../../utilities/category/category-card-wrapper/category-card-wrapper.component';

@Component({
  selector: 'app-viewer',
  imports: [],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.css'
})
export class ViewerComponent implements OnInit, OnDestroy{
  private selectionStateService = inject(PortfolioSelectionStateService);
  private portfolioService = inject(PortfolioService);
  @ViewChild('container', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;
  fallBackPage = input<Type<any> | null>(null);
  selectionStateSubscription!: Subscription;
  constructor()
  {
    effect(() => {
      if (!this.fallBackPage()) this.selectionStateSubscription = this.listenToSelectionState();
    })
  }
  ngOnInit()
  {
    if (!this.fallBackPage()) this.selectionStateSubscription = this.listenToSelectionState();
    else this.showFallBackPage();
  }
  listenToSelectionState()
  {
    return this.selectionStateService.selectionObservable$.subscribe({
      next: (selectionObject) => {
        if (selectionObject.project()) this.showProject(selectionObject.project()!);
        else if (selectionObject.folder()) this.showFolder(selectionObject.folder()!);
        else if (selectionObject.category()) this.showCategory(selectionObject.category()!);
        else this.showAvailableCategories();
      }
    });
  }
  showProject(projectInfo: ProjectInfo)
  {
    this.container.clear();
    const componentRef: ComponentRef<ProjectComponent> = this.container.createComponent(ProjectComponent);
    componentRef.setInput('projectInfo', projectInfo);
  }
  showFolder(folderInfo: FolderInfo)
  {
    this.container.clear();
    const componentRef: ComponentRef<FolderComponent> = this.container.createComponent(FolderComponent);
    componentRef.setInput('folderInfo', folderInfo);
  }
  showCategory(categoryInfo: CategoryInfo)
  {
    this.container.clear();
    const componentRef: ComponentRef<CategoryComponent> = this.container.createComponent(CategoryComponent);
    componentRef.setInput('categoryInfo', categoryInfo);
  }
  showAvailableCategories()
  {
    this.container.clear()
    const componentRef: ComponentRef<CategoryCardWrapperComponent> = this.container.createComponent(CategoryCardWrapperComponent);
    componentRef.setInput('categoryInfoList', this.portfolioService.getCategoriesList());
  }
  showFallBackPage()
  {
    this.container.clear();
    const componentType = this.fallBackPage();
    if (componentType)
    {
      const componentRef: ComponentRef<typeof componentType> = this.container.createComponent(componentType);
    }
  }
  ngOnDestroy()
  {
    this.selectionStateSubscription.unsubscribe();
  }
}
