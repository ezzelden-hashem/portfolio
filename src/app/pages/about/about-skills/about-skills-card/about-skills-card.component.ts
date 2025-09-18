import { Component, ElementRef, inject, input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SvgIconProviderService } from '../../../../services/content-management/svg-provider/svg-icon-provider.service';
import { AboutSkillsObject } from '../../../../services/content-management/content-management-data/about-page.content';

@Component({
  selector: 'app-about-skills-card',
  imports: [],
  templateUrl: './about-skills-card.component.html',
  styleUrl: './about-skills-card.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AboutSkillsCardComponent {
  router = inject(Router);
  svgIconProvider = inject(SvgIconProviderService);
  @ViewChild('aSkillsCardIcon') icon!: ElementRef<HTMLDivElement>;
  activated = input<boolean>(false);
  aSkillsCardData = input.required<AboutSkillsObject>();

  ngAfterViewInit(): void {
    this.icon.nativeElement.innerHTML = this.svgIconProvider.getIcon(this.aSkillsCardData().icon);
  }
}
