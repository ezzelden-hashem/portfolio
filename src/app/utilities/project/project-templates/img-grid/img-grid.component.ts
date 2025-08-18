import { AfterViewInit, ChangeDetectorRef, Component, inject, input, OnInit, output } from '@angular/core';
import { ImgSelectionStateService } from '../../../../services/state-management/img-selection-state.service';
import { ImgLoaderService } from '../../../../services/img-loader/img-loader.service';

@Component({
  selector: 'app-img-grid',
  imports: [],
  templateUrl: './img-grid.component.html',
  styleUrl: './img-grid.component.css'
})
export class ImgGridComponent implements AfterViewInit, OnInit {
  private imgSelectionStateService = inject(ImgSelectionStateService);
  private imageLoader = inject(ImgLoaderService);
  private cdr = inject(ChangeDetectorRef)
  imagesUrl: {
    imgUrl: string;
    isLoaded: boolean;
    thumbnail: string;
    progress: number;
  }[] = [];
  templateData = input.required<ImgGridTemplateData>();
  imgSelection = output<string>();
  ngOnInit()
  {
    for (const img of this.templateData().imgs)
    {
      let imgObject = {
        imgUrl: '',
        isLoaded: false,
        progress: 0,
        thumbnail: img.thumbnail
      }
      this.imageLoader.load(img.imgUrl, (percent) => {
        imgObject.progress = percent;
        // console.log(imgObject);
      }).then((url) => {
        imgObject.imgUrl = url;
        imgObject.isLoaded = true;
        this.cdr.detectChanges();
      })
      this.imagesUrl.push(imgObject);
    }
  }
  ngAfterViewInit(): void {
    for (let i = 0; i < this.templateData().imgs.length; i++)
    {
      document.getElementById('img-grid-card-id-' + (i + 1))!.onclick = () => {
        this.imgSelectionStateService.select(this.templateData().imgs[i].fullResolution);
      }
    }
  }
  getProgressGradient(progress: number) {
    const percent = progress;
    const angle = (percent / 100) * 360;
    return `conic-gradient(white ${angle}deg, #00000000 ${angle}deg)`;
  }
}
export type ImgGridTemplateData = {
  title: string;
  imgs: {
    imgUrl: string;
    thumbnail: string;
    fullResolution: string;
  }[];
}