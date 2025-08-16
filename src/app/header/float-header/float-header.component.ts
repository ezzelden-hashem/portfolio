import { AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { CommonStateService } from '../../services/state-management/common-state.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-float-header',
  imports: [ RouterLink ],
  templateUrl: './float-header.component.html',
  styleUrl: './float-header.component.css'
})
export class FloatHeaderComponent {
  commonState = inject(CommonStateService);
  @ViewChild('floatingHeader') floatingHeader!: ElementRef<HTMLElement>;
  @HostListener('window:scroll', []) onWindowScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 150) this.showFloatingHeader();
    else this.hideFloatingHeader();
  }
  showFloatingHeader()
  {
    // this.floatingHeader.nativeElement.style.display = 'flex';
    this.floatingHeader.nativeElement.style.top = '0px';
    this.floatingHeader.nativeElement.style.opacity = '100%';

    // setTimeout(() => {
    //   this.floatingHeader.nativeElement.style.top = '0px';
    // }, 10);
  }
  hideFloatingHeader()
  {
    this.floatingHeader.nativeElement.style.top = '-100px';
    this.floatingHeader.nativeElement.style.opacity = '0%';
    // setTimeout(() => {
    //   this.floatingHeader.nativeElement.style.display = 'none';
    // }, 250);
  }
  triggerNavBtn()
  {
    this.commonState.triggerNavBtn();
  }
}
