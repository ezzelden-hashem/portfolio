import { AfterViewInit, Component, ElementRef, input, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css'
})
export class ParagraphComponent implements AfterViewInit{
  @ViewChild('paragraph') paragraph!: ElementRef<HTMLDivElement>;
  text = input.required<string>();
  limit = input<number>(100);
  isExpanded = signal<boolean>(false);

  truncatedText()
  {
    return this.text().substring(0, this.limit()) + '...';
  }

  toggle() {
    this.isExpanded.update(v => !v);
    this.resetHeight()
  }
  resetHeight()
  {
    if(this.isExpanded())
    {
      this.paragraph.nativeElement.style.height = 
      this.paragraph.nativeElement.scrollHeight + 'px';
    }
    else
    {
      this.paragraph.nativeElement.style.height = this.limit() + 'px';
    }
    
  }
  ngAfterViewInit(): void {
    this.resetHeight();
  }
}
