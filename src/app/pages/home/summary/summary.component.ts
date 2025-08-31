import { AfterViewInit, Component, DestroyRef, ElementRef, inject, ViewChild } from '@angular/core';
import { IconsUrl } from './icon-list.data';
import { TimingService } from '../../../services/util/timing.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SummaryCardComponent } from "./summary-card/summary-card.component";
import { SummaryCardsData, SummaryParagraph } from '../../../services/content-management/content-management-data/summary.data';
import { ParagraphComponent } from "../../../utilities/paragraph/paragraph.component";


const animationDuration = 1000;

@Component({
  selector: 'app-summary',
  imports: [SummaryCardComponent, ParagraphComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
  animations: [
    trigger('swapIcon', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-100px)'
      })),
      state('repopulate', style({
        opacity: 0,
        transform: 'translateY(100px)'
      })),
      transition('visible => hidden', [
        animate(`${animationDuration}ms cubic-bezier(.5,-1,0,1.3)`)
      ]),
      transition('hidden => repopulate', [
        animate('0ms')
      ]),
      transition('repopulate => visible', [
        animate(`${animationDuration}ms cubic-bezier(.5,-1,0,1.3)`)
      ]),
    ])
  ]
})
export class SummaryComponent implements AfterViewInit{
  summaryCardsData = SummaryCardsData;
  summaryParagraph = SummaryParagraph;
  destroyRef = inject(DestroyRef);
  timingService = inject(TimingService);
  @ViewChild('quickIcon') quickIcon!: ElementRef<HTMLImageElement>;
  iconsUrl = IconsUrl
  animationState: 'visible' | 'hidden' | 'repopulate' = 'visible';
  private isAlive = true;
  ngAfterViewInit(): void {
    const mainThis = this;
    async function animationLoop()
    {
      const randIdx = Math.floor(Math.random() * mainThis.iconsUrl.length);
      
      // main delay
      await mainThis.timingService.delay(1200);
      if (mainThis.animationState === 'visible')
      {
        mainThis.animationState = 'hidden';
        
        // repopulate the icon element to the starting position
        await mainThis.timingService.delay(animationDuration);
        mainThis.animationState = 'repopulate';
        mainThis.quickIcon.nativeElement.src = mainThis.iconsUrl[randIdx];
        
        // show icon again after it has been repopulated
        await mainThis.timingService.delay(120);
        mainThis.animationState = 'visible';
      }
      if (mainThis.isAlive) animationLoop();
    }
    animationLoop()
    this.destroyRef.onDestroy(() => this.isAlive = false);
  }
}