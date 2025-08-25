import { AfterViewInit, Component, DestroyRef, ElementRef, inject, Input, input, OnDestroy, OnInit, signal, Type, ViewChild } from '@angular/core';
import { CategoriesComponent } from "./categories/categories.component";
import { ViewerComponent } from "./viewer/viewer.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { PortfolioSelectionStateService } from '../../services/state-management/portfolio-selection-state.service';
import { NavigationEnd, Router } from '@angular/router';
import { ImgViewer } from '../../img-viewer/img-viewer.init';
import { ImgSelectionStateService } from '../../services/state-management/img-selection-state.service';
import { filter } from 'rxjs';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { PortfolioUrlResolverService } from '../../services/portfolio/portfolio-url-resolver.service';
import { NotFoundComponent } from '../not-found/not-found.component';
import { FloatingBtnComponent } from "./categories/floating-btn/floating-btn.component";
import { CommonStateService } from '../../services/state-management/common-state.service';

@Component({
  selector: 'app-portfolio',
  imports: [CategoriesComponent, ViewerComponent, NavigationBarComponent, FloatingBtnComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements AfterViewInit {
  private commonState = inject(CommonStateService);
  private portfolioUrlResolver = inject(PortfolioUrlResolverService);
  private imgSelectionStateService = inject(ImgSelectionStateService);
  private portfolioService = inject(PortfolioService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  imgViewer: ImgViewer | null = null;
  selectionStateService = inject(PortfolioSelectionStateService);
  mainHeaderDom = document.getElementById('main-header-id') as HTMLElement;
  @ViewChild('portfolio_page') portfolioRef!: ElementRef<HTMLDivElement>;
  private _fallBackPage = signal<Type<any> | null>(null);
  @Input() set fallBackPage(value: Type<any> | null) {
    this._fallBackPage.set(value);
  }
  getFallBackPage = this._fallBackPage.asReadonly();
  calculatedHeight = window.innerHeight - this.mainHeaderDom.getBoundingClientRect().height;
  categoriesBtnState = signal<boolean | null>(null);
  ngOnInit()
  {
    const urlObservation = this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe({
      next: (e) => {
        const resolve = this.portfolioUrlResolver.resolveUrl(e.urlAfterRedirects);
        if (resolve === NotFoundComponent)
        {
          console.log('');
        }
        this.router.navigate(e.urlAfterRedirects.split('/').filter(s => !!s))
      }
    })
    const imgSelectionObservation = this.imgSelectionStateService.currentImgSelected$.subscribe({
      next: (imgUrl) => {
        if (imgUrl && !this.imgViewer) this.imgViewer = new ImgViewer(
          imgUrl, 
          () => this.imgSelectionStateService.deSelectImg()
        );
        else this.imgViewer = null;
      }
    })
    const stateObservation = this.selectionStateService.selectionObservable$.subscribe({
      next: (value) => {
        let urlSegments = [];
        if (value.category()) urlSegments.push(value.category()?.name);
        if (value.folder()) urlSegments.push(value.folder()?.name);
        if (value.project()) urlSegments.push(value.project()?.name);
        if (!this.getFallBackPage()) this.router.navigate(['portfolio', ...urlSegments]);
      }
    });
    const commonStateObservation = this.commonState.categoriesBtn$.subscribe({
      next: (value) => {
        this.categoriesBtnState.set(value);
      }
    })
    this.destroyRef.onDestroy(() => {
      stateObservation.unsubscribe();
      imgSelectionObservation.unsubscribe();
    });
  }
  ngAfterViewInit()
  {
    this.portfolioRef.nativeElement.style.height = window.innerHeight - 32 - this.mainHeaderDom.getBoundingClientRect().height + 'px';
    addEventListener('resize', () => {
      this.portfolioRef.nativeElement.style.height = window.innerHeight - 32 - this.mainHeaderDom.getBoundingClientRect().height + 'px';
    })
  }
  resetFallBack()
  {
    this._fallBackPage.set(null);
  }
}
