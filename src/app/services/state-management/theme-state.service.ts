import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type ThemeColors = 'blue' | 'pink' | 'orange' | 'green' | 'purple';
export type ThemeData = {
  type: 'light' | 'dark';
  color: ThemeColors;
  animation: boolean;
}
const defaultTheme: ThemeData = {
  type: 'light',
  color: 'blue',
  animation: true
}

@Injectable({
  providedIn: 'root'
})
export class ThemeStateService {
  theme$ = new BehaviorSubject(this.getSavedTheme()? this.getSavedTheme() : defaultTheme);
  getTheme()
  {
    return this.theme$.value;
  }
  setTheme(theme: ThemeData)
  {
    this.theme$.next(theme);
    this.saveTheme(theme);
  }
  private saveTheme(themeData: ThemeData)
  {
    window.localStorage.setItem('themeData', JSON.stringify(themeData));
  }
  private getSavedTheme(): ThemeData | null
  {
    if (window.localStorage.getItem('themeData') !== null)
    {
      return (JSON.parse(window.localStorage.getItem('themeData')!) as ThemeData);
    }
    else return null;
  }
}
