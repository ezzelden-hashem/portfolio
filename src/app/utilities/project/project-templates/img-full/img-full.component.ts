import { Component, ElementRef, HostListener, inject, input, OnInit, output, signal, ViewChild } from '@angular/core';
import { ImgSelectionStateService } from '../../../../services/state-management/img-selection-state.service';
import { ImgLoaderService } from '../../../../services/img-loader/img-loader.service';

@Component({
  selector: 'app-img-full',
  imports: [],
  templateUrl: './img-full.component.html',
  styleUrl: './img-full.component.css'
})
export class ImgFullComponent implements OnInit {
  private imgSelectionStateService = inject(ImgSelectionStateService);
  private imageLoader = inject(ImgLoaderService);
  isLoaded = signal(false);
  templateData = input.required<ImgFullTemplateData>();
  loadingProgress = signal(0);
  loadedImageUrl = signal<string | null>(null)

  @ViewChild('imageContainer') imageContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('imageTag') imageTag!: ElementRef<HTMLImageElement>;
  imgSelection = output<string>();
  @HostListener('click') viewImg = () => {
    this.imgSelectionStateService.select(this.templateData().fullResolution)
  }
  ngOnInit()
  {
    this.imageLoader.load(this.templateData().imgUrl, (percent) => {
      this.loadingProgress.set(percent);
    }).then((url) => {
      this.loadedImageUrl.set(url);
      this.isLoaded.set(true);
    })
  }
  getProgressGradient() {
    const percent = this.loadingProgress();
    const angle = (percent / 100) * 360;
    return `conic-gradient(white ${angle}deg, #00000000 ${angle}deg)`;
  }
}
export type ImgFullTemplateData = {
  title: string;
  imgUrl: string;
  thumbnailUrl: string;
  fullResolution: string;
}