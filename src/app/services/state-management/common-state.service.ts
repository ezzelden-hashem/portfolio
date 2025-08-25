import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonStateService {
  private headerNavigationBtn = new BehaviorSubject<boolean>(false);
  private categoriesBtn = new BehaviorSubject<boolean>(false);
  
  headerNavigationBtn$ = this.headerNavigationBtn.asObservable();
  categoriesBtn$ = this.categoriesBtn.asObservable();
  triggerNavBtn = () => this.headerNavigationBtn.next(!this.headerNavigationBtn.value);
  triggerCategoriesBtn = () => this.categoriesBtn.next(!this.categoriesBtn.value);
}
