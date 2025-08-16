import { AfterViewInit, Component, inject, input, output } from '@angular/core';
import { ImgSelectionStateService } from '../../../../services/state-management/img-selection-state.service';

@Component({
  selector: 'app-img-grid',
  imports: [],
  templateUrl: './img-grid.component.html',
  styleUrl: './img-grid.component.css'
})
export class ImgGridComponent implements AfterViewInit{
  private imgSelectionStateService = inject(ImgSelectionStateService);
  templateData = input.required<ImgGridTemplateData>();
  imgSelection = output<string>();
  ngAfterViewInit(): void {
    for (let i = 0; i < this.templateData().imgUrls.length; i++)
    {
      document.getElementById('img-grid-card-id-' + (i + 1))!.onclick = () => {
        this.imgSelectionStateService.select(this.templateData().imgUrls[i]);
      }
    }
  }
}
export type ImgGridTemplateData = {
  title: string;
  imgUrls: string[];
}