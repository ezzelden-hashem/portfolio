import { Injectable, signal } from '@angular/core';
import { CategoryInfo, FolderInfo, ProjectInfo, SegmentsSelectionObject } from '../portfolio/portfolio.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioSelectionStateService {
  private selectionObject = {
    category: signal<CategoryInfo | null>(null),
    folder: signal<FolderInfo | null>(null),
    project: signal<ProjectInfo | null>(null),
  }
  selectionSubject = new BehaviorSubject(this.selectionObject);
  selectionObservable$ = this.selectionSubject.asObservable()
  getSelectedCategory()
  {
    return this.selectionObject.category();
  }
  getSelectedFolder()
  {
    return this.selectionObject.folder();
  }
  getSelectedProject()
  {
    return this.selectionObject.project();
  }
  getPathSegments(): SegmentsSelectionObject
  {
    return {
      category: this.selectionObject.category(),
      folder: this.selectionObject.folder(),
      project: this.selectionObject.project(),
    };
  }
  setSelectedCategory(categoryInfo: CategoryInfo | null)
  {
    this.selectionObject.category.set(categoryInfo);
    this.selectionSubject.next(this.selectionObject);
  }
  setSelectedFolder(folderInfo: FolderInfo | null)
  {
    this.selectionObject.folder.set(folderInfo);
    this.selectionSubject.next(this.selectionObject);
  }
  setSelectedProject(projectInfo: ProjectInfo | null)
  {
    this.selectionObject.project.set(projectInfo);
    this.selectionSubject.next(this.selectionObject);
  }
}
