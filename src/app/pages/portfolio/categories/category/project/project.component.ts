import { Component, computed, ElementRef, HostListener, inject, input, output, Type, ViewChild } from '@angular/core';
import { CategoryInfo, FolderInfo, PortfolioObjectType, ProjectInfo } from '../../../../../services/portfolio/portfolio.model';
import { SvgIconProviderService } from '../../../../../services/content-management/svg-provider/svg-icon-provider.service';
import { PortfolioSelectionStateService } from '../../../../../services/state-management/portfolio-selection-state.service';
import { CategoryComponent } from '../category.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  private router = inject(Router);
  private svgIconProvider = inject(SvgIconProviderService);
  private selectionStateService = inject(PortfolioSelectionStateService);
  selection = output<void>();
  @HostListener('click') activateSelection = () => {
    if (!this.selected())
    {
      this.selectionStateService.setSelectedProject(this.projectInfo());
      this.selection.emit();
      if (this.parentObjectInfo().objectType.toFixed() === PortfolioObjectType.CategoryInfo.toFixed())
      {
        this.selectionStateService.setSelectedFolder(null);
        this.router.navigate(['portfolio',
          this.selectionStateService.getSelectedCategory()?.name,
          this.selectionStateService.getSelectedProject()?.name,
        ]);
      }
      else
      {
        this.router.navigate(['portfolio',
          this.selectionStateService.getSelectedCategory()?.name,
          this.selectionStateService.getSelectedFolder()?.name,
          this.selectionStateService.getSelectedProject()?.name,
        ]);
      }
    }
  };
  @ViewChild('project_icon') projectIconRef!: ElementRef<HTMLDivElement>;
  parentObjectInfo = input.required<CategoryInfo | FolderInfo>();
  projectInfo = input.required<ProjectInfo>();
  selected = computed(() => {
    if (this.selectionStateService.getSelectedProject())
    {
      return ((this.selectionStateService.getSelectedProject() as unknown) as ProjectInfo).name === this.projectInfo().name
    }
    return false;
  });
  ngAfterViewInit(): void {
    this.projectIconRef.nativeElement.innerHTML = this.svgIconProvider.getIcon(this.projectInfo().icon);
  }
}
