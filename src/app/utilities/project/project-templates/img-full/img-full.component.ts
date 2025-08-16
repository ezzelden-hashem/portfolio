import { Component, ElementRef, HostListener, inject, input, output, ViewChild } from '@angular/core';
import { ImgSelectionStateService } from '../../../../services/state-management/img-selection-state.service';

@Component({
  selector: 'app-img-full',
  imports: [],
  templateUrl: './img-full.component.html',
  styleUrl: './img-full.component.css'
})
export class ImgFullComponent {
  private imgSelectionStateService = inject(ImgSelectionStateService);
  templateData = input.required<ImgFullTemplateData>();
  @ViewChild('imageContainer') imageContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('imageTag') imageTag!: ElementRef<HTMLImageElement>;
  imgSelection = output<string>();
  @HostListener('click') viewImg = () => {
    this.imgSelectionStateService.select(this.templateData().imgUrl)
  }
}
export type ImgFullTemplateData = {
  title: string;
  imgUrl: string;
}