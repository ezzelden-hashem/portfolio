import { Component, effect, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonStateService } from '../../services/state-management/common-state.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu-page',
  imports: [ RouterLink ],
  templateUrl: './nav-menu-page.component.html',
  styleUrl: './nav-menu-page.component.css'
})
export class NavMenuPageComponent {
  commonState = inject(CommonStateService);
  @ViewChild('navPageContainer') navPage!: ElementRef<HTMLDivElement>;
  ngAfterViewInit()
  {
    this.commonState.headerNavigationBtn$.subscribe({
      next: (value) => 
      {
        if (value)
        {
          this.navPage.nativeElement.style.display = 'flex';
          setTimeout(() => {
            this.navPage.nativeElement.style.opacity = '100%';
          }, 50)
        }
        else
        {
          this.navPage.nativeElement.style.opacity = '0%';
          setTimeout(() => {
            this.navPage.nativeElement.style.display = 'none';
          }, 250)
        }
      }
    })
  }
  triggerNavBtn()
  {
    this.commonState.triggerNavBtn();
  }
}
