import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgSelectionStateService {
  private currentImgSelected = new BehaviorSubject<string | null>(null);
  currentImgSelected$ = this.currentImgSelected.asObservable();
  deSelectImg()
  {
    this.currentImgSelected.next(null);
  }
  select(imgUrl: string)
  {
    this.currentImgSelected.next(imgUrl);
  }
}
