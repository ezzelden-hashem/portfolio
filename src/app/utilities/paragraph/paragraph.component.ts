import { AfterViewInit, Component, ElementRef, inject, input, Renderer2, signal, ViewChild } from '@angular/core';
import { TimingService } from '../../services/util/timing.service';

@Component({
  selector: 'app-paragraph',
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css',
})
export class ParagraphComponent implements AfterViewInit{
  @ViewChild('paragraph') paragraph!: ElementRef<HTMLDivElement>;
  @ViewChild('textContainer') textContainer!: ElementRef<HTMLDivElement>;
  renderer = inject(Renderer2);
  timing = inject(TimingService)
  text = input.required<string>();
  lineLimit = input<number>(3);
  isExpanded = signal<boolean>(false);
  expandedHeight = signal<null | number>(null);
  collapsedHeight = signal<null | number>(null);

  toggle() {
    this.isExpanded.update(v => !v);
    this.toggleHeight();
  }
  async ngAfterViewInit() {
    if ([...this.textContainer.nativeElement.classList].includes('collapsed'))
    {
      this.renderer.setStyle(this.textContainer.nativeElement, 'line-clamp', this.lineLimit() + '');
      this.renderer.setStyle(this.textContainer.nativeElement, '-webkit-line-clamp', this.lineLimit() + '');
    }
    this.collapsedHeight.set(this.textContainer.nativeElement.offsetHeight);
    this.textContainer.nativeElement.classList.remove('collapsed');
    await this.timing.delay(20);
    const oh = this.textContainer.nativeElement.offsetHeight;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const oh = this.textContainer.nativeElement.offsetHeight;
        this.expandedHeight.set(this.textContainer.nativeElement.scrollHeight);
        this.textContainer.nativeElement.style.height = this.collapsedHeight() + 'px';
      })
    })
    
  }
  toggleHeight()
  {
    if (this.isExpanded())
    {
      this.renderer.setStyle(this.textContainer.nativeElement, 'height', this.expandedHeight() + 'px')
    }
    else
    {
      this.renderer.setStyle(this.textContainer.nativeElement, 'height', this.collapsedHeight() + 'px')
    }
  }
}
