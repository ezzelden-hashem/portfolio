import { Component, ComponentRef, inject, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { PortfolioSelectionStateService } from '../../services/state-management/portfolio-selection-state.service';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { CategoryNotFoundComponent } from '../not-found/category-not-found/category-not-found.component';
import { PortfolioItemNotFoundComponent } from '../not-found/portfolio-item-not-found/portfolio-item-not-found.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PortfolioUrlResolverService } from '../../services/portfolio/portfolio-url-resolver.service';

@Component({
  template: '<ng-template #container></ng-template>'
})
export class UrlResolverComponent implements OnInit {
  private router = inject(Router);
  private portfolioUrlResolver = inject(PortfolioUrlResolverService);
  private selectionStateService = inject(PortfolioSelectionStateService);
  private portfolioService = inject(PortfolioService);
  @ViewChild('container', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;
  ngOnInit(): void {
    const urlSegments = this.router.url.split('/').filter(s => !!s);
    // console.log('you are in url resolver component!')
    const resolve = this.portfolioUrlResolver.resolveUrl(this.router.url);
    if (resolve === NotFoundComponent)
    {
      this.initializeNotFoundPage()
    }
    else if (resolve === PortfolioComponent)
    {
      this.initializePortfolioPage()
    }
    else
    {
      this.initializePortfolioPage(resolve);
    }
  }
  initializePortfolioPage(fallBackPage: Type<any> | null = null)
  {
    this.container.clear();
    const componentRef: ComponentRef<PortfolioComponent> = this.container.createComponent(PortfolioComponent);
    componentRef.setInput('fallBackPage', fallBackPage);
  }
  initializeNotFoundPage()
  {
    this.container.clear();
    const componentRef: ComponentRef<NotFoundComponent> = this.container.createComponent(NotFoundComponent);
  }
  categoryExists(categoryName: string)
  {
    return this.portfolioService.getCategoriesList().find(category => category.name === categoryName);
  }
  folderExists(categoryName: string, folderName: string)
  {
    return this.portfolioService.getCategoryFolders(categoryName).find(f => f.name === folderName);
  }
  projectExists(categoryName: string, folderName: string, projectName: string)
  {
    return this.portfolioService.getProjectsFolderByName(categoryName, folderName)?.find(p => p.name === projectName);
  }
  selectProjectPath(categoryName: string, projectName: string, folderName: string | null = null)
  {
    this.selectionStateService.setSelectedCategory(
      this.portfolioService.getCategoryInfoByName(categoryName)
    );
    if (folderName)
    {
      this.selectionStateService.setSelectedFolder(
        this.portfolioService.getFolderInfoByName(categoryName, folderName)
      );
      this.selectionStateService.setSelectedProject(
        this.portfolioService.getProjectInfoByName(categoryName, projectName, folderName)
      );
    }
    else
    {
      this.selectionStateService.setSelectedProject(
        this.portfolioService.getProjectInfoByName(categoryName, projectName)
      );
    }
  }
  selectFolderPath(categoryName: string, folderName: string)
  {
    this.selectionStateService.setSelectedCategory(
      this.portfolioService.getCategoryInfoByName(categoryName)
    );
    this.selectionStateService.setSelectedFolder(
      this.portfolioService.getFolderInfoByName(categoryName, folderName)
    );
  }
  selectCategory(categoryName: string)
  {
    this.selectionStateService.setSelectedCategory(
      this.portfolioService.getCategoryInfoByName(categoryName)
    );
  }
  deSelectAll()
  {
    this.selectionStateService.setSelectedCategory(null);
    this.selectionStateService.setSelectedFolder(null);
    this.selectionStateService.setSelectedProject(null);
  }
}
