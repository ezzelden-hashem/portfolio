import { Injectable } from '@angular/core';
import { portfolio } from './portfolio.data';
import {
  Category,
  CategoryInfo,
  Folder,
  FolderInfo,
  PortfolioObjectType,
  Project,
  ProjectInfo,
} from './portfolio.model';
import { project_password_wallet } from './mobile-app/password-wallet.project';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private portfolioObject = portfolio;
  getCategoriesList(): CategoryInfo[] {
    let categoriesList: CategoryInfo[] = [];
    for (const category of this.portfolioObject) {
      categoriesList.push({
        objectType: PortfolioObjectType.CategoryInfo,
        id: category.id,
        name: category.name,
        title: category.title,
        icon: category.icon,
      });
    }
    return categoriesList;
  }
  getCategoryFolders(categoryName: string): FolderInfo[] {
    let categoryFolders: FolderInfo[] = [];
    const findResult = this.portfolioObject.find(
      (category) => category.name === categoryName
    );
    if (findResult) {
      for (const folder of findResult.folders) {
        categoryFolders.push({
          objectType: PortfolioObjectType.FolderInfo,
          id: folder.id,
          name: folder.name,
          title: folder.title,
          icon: folder.icon,
        });
      }
    }
    return categoryFolders;
  }
  getCategoryProjects(categoryName: string): ProjectInfo[] {
    let categoryProjects: ProjectInfo[] = [];
    const findResult = this.portfolioObject.find(
      (category) => category.name === categoryName
    );
    if (findResult) {
      for (const project of findResult.projects) {
        categoryProjects.push({
          objectType: PortfolioObjectType.ProjectInfo,
          id: project.id,
          name: project.name,
          title: project.title,
          icon: project.icon,
          thumbnail: project.thumbnail,
          description: project.description,
        });
      }
    }
    return categoryProjects;
  }
  getFolderProjects(folderId: string): ProjectInfo[] {
    let folderProjects: ProjectInfo[] = [];
    let folder!: Folder;
    for (const category of this.portfolioObject) {
      const findResult = category.folders.find(
        (folder) => folder.id === folderId
      );
      if (findResult) {
        folder = findResult;
        break;
      }
    }
    if (folder) {
      for (const project of folder.projects) {
        folderProjects.push({
          objectType: PortfolioObjectType.ProjectInfo,
          id: project.id,
          name: project.name,
          title: project.title,
          icon: project.icon,
          thumbnail: project.thumbnail,
          description: project.description,
        });
      }
    }
    return folderProjects;
  }
  getCategoryById(categoryId: string): Category | null {
    const findResult = this.portfolioObject.find((c) => c.id === categoryId);
    if (findResult) return findResult;
    return null;
  }
  getFolderById(folderId: string): Folder | null {
    const findResult = this.portfolioObject
      .flatMap((c) => c.folders)
      .find((f) => f.id === folderId);
    if (findResult) return findResult;
    return null;
  }
  getProjectById(projectId: string): Project | null {
    const findResult =
      this.portfolioObject
        .flatMap((c) => c.folders)
        .flatMap((f) => f.projects)
        .find((p) => p.id === projectId) ||
      this.portfolioObject
        .flatMap((c) => c.projects)
        .find((p) => p.id === projectId);
    if (findResult) return findResult;
    return null;
  }
  getCategoryInfoByName(categoryName: string): CategoryInfo | null {
    const findResult = this.portfolioObject.find(
      (c) => c.name === categoryName
    );
    if (findResult) {
      return {
        id: findResult.id,
        name: findResult.name,
        icon: findResult.icon,
        title: findResult.title,
        objectType: PortfolioObjectType.CategoryInfo,
      };
    }
    return null;
  }
  getFolderInfoByName(
    categoryName: string,
    folderName: string
  ): FolderInfo | null {
    const findResult = this.getCategoryFolders(categoryName).find(
      (f) => f.name === folderName
    );
    if (findResult) {
      return {
        id: findResult.id,
        name: findResult.name,
        icon: findResult.icon,
        title: findResult.title,
        objectType: PortfolioObjectType.FolderInfo,
      };
    }
    return null;
  }
  getProjectInfoByName(
    categoryName: string,
    projectName: string,
    folderName: string | null = null
  ): ProjectInfo | null {
    const findResult = folderName
      ? this.portfolioObject
          .find((c) => c.name === categoryName)
          ?.folders.find((f) => f.name === folderName)
          ?.projects.find((p) => p.name === projectName)
      : this.portfolioObject
          .find((c) => c.name === categoryName)
          ?.projects.find((p) => p.name === projectName);
    if (findResult) {
      return {
        id: findResult.id,
        name: findResult.name,
        icon: findResult.icon,
        title: findResult.title,
        objectType: PortfolioObjectType.ProjectInfo,
        thumbnail: findResult.thumbnail,
        description: findResult.description,
      };
    }
    return null;
  }
  getProjectsFolderByName(
    categoryName: string,
    folderName: string
  ): ProjectInfo[] | null {
    let projects: ProjectInfo[] = [];
    const findResult = this.portfolioObject
      .find((c) => c.name === categoryName)
      ?.folders.find((f) => f.name === folderName)?.projects;
    for (const project of findResult ? findResult : []) {
      projects.push({
        id: project.id,
        name: project.name,
        title: project.title,
        icon: project.icon,
        objectType: PortfolioObjectType.ProjectInfo,
        thumbnail: project.thumbnail,
        description: project.description,
      });
    }
    return projects ? projects : null;
  }
  getRandomProjects(count: number, exclude: Project[]): Project[] {
    let projects: Project[] = [];
    let randProjects: Project[] = [];
    let randIndices: number[] = [];
    this.portfolioObject
      .flatMap((c) => c.folders)
      .map((f) => projects.push(...f.projects));
    this.portfolioObject
      .flatMap((c) => c.projects)
      .map((p) => projects.push(p));
    let pending = count <= projects.length ? count : projects.length;
    while (pending > 0) {
      const randIdx: number = Math.floor(Math.random() * projects.length);
      if (
        !randIndices.includes(randIdx) &&
        !exclude.includes(projects[randIdx])
      ) {
        randIndices.push(randIdx);
        --pending;
      }
    }
    randIndices.map((i) => randProjects.push(projects[i]));
    return randProjects;
  }
  getProjectPath(projectId: string): string[] | null {
    for (const category of this.portfolioObject) {
      for (const project of category.projects) {
        if (project.id === projectId) return [category.name, project.name];
      }
      for (const folder of category.folders) {
        for (const project of folder.projects) {
          if (project.id === projectId)
            return [category.name, folder.name, project.name];
        }
      }
    }
    return null;
  }
}
