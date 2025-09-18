import { NgStyle } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';

const scrollingHeightOffset = 150;
const animationRange = {
  photo: {
    startX: window.innerWidth / 2,
    // startY: window.innerHeight / 2,
    startY: 110,
    startScale: 1,
    endX: 100,
    endY: 150,
    endScale: 0.5
  }
}
@Component({
  selector: 'app-about-header',
  imports: [NgStyle],
  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.css'
})
export class AboutHeaderComponent {
  @ViewChild('headerBanner') headerBanner!: ElementRef<HTMLDivElement>;
  progressObject = signal<ProgressObject>({
    photo: {
      posX: animationRange.photo.startX,
      posY: animationRange.photo.startY,
      scale: animationRange.photo.startScale
    }
  })
  animateOnScroll()
  {
    const percent = Math.max(0, Math.min(1, window.scrollY / scrollingHeightOffset));
    
    this.progressObject.update((o) => {
      return {
        photo: {
          posX: animationRange.photo.startX + (this.getRange(animationRange.photo.startX, animationRange.photo.endX) * percent),
          posY: animationRange.photo.startY + (this.getRange(animationRange.photo.startY, animationRange.photo.endY) * percent),
          scale: animationRange.photo.startScale + (this.getRange(animationRange.photo.startScale, animationRange.photo.endScale) * percent)
        }
      }
    });
  }

  private getRange(from: number, to: number)
  {
    return to - from;
  }
  ngAfterViewInit()
  {
    
  }
}
export type ProgressObject = {
  photo: {
      posX: number;
      posY: number;
      scale: number;
    }
}