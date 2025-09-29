import { ComponentRef, Injectable, Type } from '@angular/core';
import { ImgFullComponent } from '../../utilities/project/project-templates/img-full/img-full.component';
import { ImgGridComponent } from '../../utilities/project/project-templates/img-grid/img-grid.component';
import { MobileAppComponent } from '../../utilities/project/project-templates/mobile-app/mobile-app.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectTemplateResolutionService {
  private resolutionDictionary = {
    'app-img-full': ImgFullComponent,
    'app-img-grid': ImgGridComponent,
    'app-mobile-app': MobileAppComponent,
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
