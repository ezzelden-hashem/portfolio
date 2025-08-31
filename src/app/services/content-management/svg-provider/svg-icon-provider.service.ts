import { Injectable } from '@angular/core';
import { IconsDictionary } from '../content-management-data/icons.dictionary';

@Injectable({
  providedIn: 'root',
})
export class SvgIconProviderService {
  private svgIcons: any = IconsDictionary;

  getIcon(iconName: string) {
    if (Object.keys(this.svgIcons).includes(iconName)) {
      return this.svgIcons[iconName];
    }
    return '@Icon';
  }
}
