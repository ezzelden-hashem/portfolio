import { ComponentRef, Injectable, Type } from '@angular/core';
import { ImgFullComponent } from '../../utilities/project/project-templates/img-full/img-full.component';
import { ImgGridComponent } from '../../utilities/project/project-templates/img-grid/img-grid.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectTemplateResolutionService {
  private resolutionDictionary = {
    'app-img-full': ImgFullComponent,
    'app-img-grid': ImgGridComponent,
  }
  transulateSelector(componentSelector: string): Type<any> | null
  {
    if (Object.keys(this.resolutionDictionary).includes(componentSelector))
    {
      return Object(this.resolutionDictionary)[componentSelector];
    }
    return null;
  }
}
