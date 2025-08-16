import { Component, ComponentRef, ElementRef, inject, input, OnInit, output, ViewChild, ViewContainerRef } from '@angular/core';
import { ProjectInfo } from '../../services/portfolio/portfolio.model';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { ProjectTemplateResolutionService } from '../../services/portfolio/project-template-resolution.service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit{
  private portfolioService = inject(PortfolioService);
  private projectTemplateResolution = inject(ProjectTemplateResolutionService);
  @ViewChild('projectContainer', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;
  projectInfo = input.required<ProjectInfo>();
  ngOnInit(): void {
    this.container.clear();
    let project = this.portfolioService.getProjectById(this.projectInfo().id);
    for (const template of project?.templates || [])
    {
      const componentType = this.projectTemplateResolution.transulateSelector(template.templateName);
      if (componentType)
      {
        const componentRef: ComponentRef<typeof componentType> = this.container.createComponent(componentType);
        componentRef.setInput('templateData', template.templateData);
      }
    }
  }
}
