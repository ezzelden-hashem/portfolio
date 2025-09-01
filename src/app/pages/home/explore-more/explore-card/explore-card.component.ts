import { AfterViewInit, Component, ElementRef, inject, input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ExploreMoreObject } from '../../../../services/content-management/content-management-data/explore-more.data';
import { Router } from '@angular/router';
import { SvgIconProviderService } from '../../../../services/content-management/svg-provider/svg-icon-provider.service';

@Component({
  selector: 'app-explore-card',
  imports: [],
  templateUrl: './explore-card.component.html',
  styleUrl: './explore-card.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ExploreCardComponent implements AfterViewInit {
  router = inject(Router);
  svgIconProvider = inject(SvgIconProviderService);
  @ViewChild('exploreCardIcon') icon!: ElementRef<HTMLDivElement>;
  activated = input<boolean>(false);
  exploreCardData = input.required<ExploreMoreObject>();

  ngAfterViewInit(): void {
    this.icon.nativeElement.innerHTML = this.svgIconProvider.getIcon(this.exploreCardData().icon);
  }

  gotoSection()
  {
    this.router.navigate([this.exploreCardData().url])
  }
}
