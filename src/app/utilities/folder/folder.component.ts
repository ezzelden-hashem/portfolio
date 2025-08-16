import { Component, ComponentRef, inject, input, ViewChild, ViewContainerRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { FolderInfo } from '../../services/portfolio/portfolio.model';
import { ProjectCardComponent } from '../project/project-card/project-card.component';

@Component({
  selector: 'app-folder',
  imports: [],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css'
})
export class FolderComponent {
  private portfolioService = inject(PortfolioService);
  @ViewChild('folderContainer', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;
  folderInfo = input.required<FolderInfo>();
  ngOnInit(): void {
    this.container.clear();
    let folder = this.portfolioService.getFolderById(this.folderInfo().id);
    for (const project of folder?.projects || [])
    {
      const componentRef: ComponentRef<ProjectCardComponent> = this.container.createComponent(ProjectCardComponent);
      componentRef.setInput('project', project);
    }
  }
}
