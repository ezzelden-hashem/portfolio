import { inject, Injectable, Type } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioSelectionStateService } from '../state-management/portfolio-selection-state.service';
import { PortfolioService } from './portfolio.service';
import { PortfolioItemNotFoundComponent } from '../../pages/not-found/portfolio-item-not-found/portfolio-item-not-found.component';
import { PortfolioComponent } from '../../pages/portfolio/portfolio.component';
import { CategoryNotFoundComponent } from '../../pages/not-found/category-not-found/category-not-found.component';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';

@Injectable({
  providedIn: 'root'
})
export class PortfolioUrlResolverService {
  private router = inject(Router);
  private selectionStateService = inject(PortfolioSelectionStateService);
  private portfolioService = inject(PortfolioService);
  resolveUrl(url: string): Type<any> {
    // // this.printState('state before');
    const urlSegments = url.split('/').filter(s => !!s);
    if (urlSegments[0] === 'portfolio' && (urlSegments.length <= 4) && (urlSegments.length >= 2))
    {
      const categorySegment = urlSegments[1];
      if (this.categoryExists(categorySegment))
      {
        if (urlSegments.length >= 3)
        {
          if (this.folderExists(categorySegment, urlSegments[2]))
          {
            if (urlSegments.length === 4)
            {
              if (this.projectExists(categorySegment, urlSegments[2], urlSegments[3]))
              {
                this.selectProjectPath(categorySegment, urlSegments[3], urlSegments[2])
                this.router.navigate(urlSegments);
                // // this.printState('full project path selected');
                return PortfolioComponent;
              }
              else
              {
                this.selectFolderPath(categorySegment, urlSegments[2]);
                // Show No Project Found Page FallBack  #PortfolioItemNotFoundComponent
                this.router.navigate(urlSegments);
                // // this.printState('no project found');
                return PortfolioItemNotFoundComponent;
              }
            }
            else
            {
              this.selectFolderPath(categorySegment, urlSegments[2]);
              this.router.navigate(urlSegments);
              // this.printState('folder path selected');
              return PortfolioComponent;
            }
          }
          else
          {
            if (this.portfolioService.getCategoryProjects(categorySegment).find(p => p.name === urlSegments[2]))
            {
              this.selectProjectPath(categorySegment, urlSegments[2]);
              this.router.navigate(urlSegments);
              // this.printState('short project path selected');
              return PortfolioComponent;
            }
            else
            {
              this.selectCategory(categorySegment);
              // Show No Folder or Project Found Page FallBack  #PortfolioItemNotFoundComponent
              // this.printState('no project found for short path');
              return PortfolioItemNotFoundComponent;
              // this.router.navigate(urlSegments);
            }
          }
        }
        else
        {
          this.selectCategory(categorySegment);
          this.router.navigate(urlSegments);
          // this.printState('category path selected');
          return PortfolioComponent;
        }
      }
      else
      {
        this.deSelectAll();
        // Show No Category Found Page FallBack  #CategoryNotFoundComponent
        this.router.navigate(urlSegments);
        // this.printState('no category found');
        return CategoryNotFoundComponent;
        
      }
    }
    else
    {
      this.deSelectAll();
      // this.printState('the portfolio url is wrong');
      // console.log(url)
      return NotFoundComponent;
    }
  }
  private categoryExists(categoryName: string)
  {
    return this.portfolioService.getCategoriesList().find(category => category.name === categoryName);
  }
  private folderExists(categoryName: string, folderName: string)
  {
    return this.portfolioService.getCategoryFolders(categoryName).find(f => f.name === folderName);
  }
  private projectExists(categoryName: string, folderName: string, projectName: string)
  {
    return this.portfolioService.getProjectsFolderByName(categoryName, folderName)?.find(p => p.name === projectName);
  }
  private selectProjectPath(categoryName: string, projectName: string, folderName: string | null = null)
  {
    this.deSelectAll();
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
  private selectFolderPath(categoryName: string, folderName: string)
  {
    this.deSelectAll();
    this.selectionStateService.setSelectedCategory(
      this.portfolioService.getCategoryInfoByName(categoryName)
    );
    this.selectionStateService.setSelectedFolder(
      this.portfolioService.getFolderInfoByName(categoryName, folderName)
    );
  }
  private selectCategory(categoryName: string)
  {
    this.deSelectAll();
    this.selectionStateService.setSelectedCategory(
      this.portfolioService.getCategoryInfoByName(categoryName)
    );
  }
  private deSelectAll()
  {
    this.selectionStateService.setSelectedCategory(null);
    this.selectionStateService.setSelectedFolder(null);
    this.selectionStateService.setSelectedProject(null);
  }
  private printState(title: string)
  {
    console.log(title);
    console.log([this.selectionStateService.getSelectedCategory(), this.selectionStateService.getSelectedFolder(), this.selectionStateService.getSelectedProject()])
    console.log('')
  }
}
