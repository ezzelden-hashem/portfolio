import { AfterViewInit, Component, ElementRef, inject, input, ViewChild } from '@angular/core';
import { SvgIconProviderService } from '../../../../services/content-management/svg-provider/svg-icon-provider.service';

@Component({
  selector: 'app-summary-card',
  imports: [],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css'
})
export class SummaryCardComponent implements AfterViewInit {
  iconProvider = inject(SvgIconProviderService);
  summaryCardData = input.required<SummaryCardData>();
  @ViewChild('scIcon') scIcon!: ElementRef<HTMLDivElement>;
  ngAfterViewInit(): void {
    this.scIcon.nativeElement.innerHTML = this.iconProvider.getIcon(this.summaryCardData().icon);
  }
}
export type SummaryCardData = {
  icon: string;
  title: string;
  details: string;
}
