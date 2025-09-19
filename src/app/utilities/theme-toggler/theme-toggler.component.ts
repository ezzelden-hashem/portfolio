import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColors, ThemeStateService } from '../../services/state-management/theme-state.service';
const accentColorsObject: TColor[] = 
[
    {
        colorName: 'blue',
        colorHex : '#64b5f6'
    },
    {
        colorName: 'green',
        colorHex : '#81c784'
    },
    {
        colorName: 'orange',
        colorHex : '#ffb74d'
    },
    {
        colorName: 'pink',
        colorHex : '#e57373'
    },
    {
        colorName: 'purple',
        colorHex : '#ba68c8'
    },
];
export type ThemeType = 'light' | 'dark';
export type TColor = {
    colorName: ThemeColors;
    colorHex: string;
}
@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.css'],
})
export class ThemeTogglerComponent {
    themeState = inject(ThemeStateService);
    accentColors = accentColorsObject;

    themeType: ThemeType = this.themeState.getTheme()!.type;
    accentColor: TColor = this.accentColors.find(c => c.colorName === this.themeState.getTheme()?.color)!;
    
    animationsEnabled: boolean = this.themeState.getTheme()!.animation;
    @Output() themeChange = new EventEmitter<ThemeType>();
    @Output() accentColorChange = new EventEmitter<TColor>();
    @Output() animationsEnabledChange = new EventEmitter<boolean>();

    isExpanded = false;
    showAccentColorPicker = false;
    
    toggleTheme(): void {
      this.themeType = this.themeType === 'dark' ? 'light' : 'dark';
      this.themeChange.emit(this.themeType);
      this.themeState.setTheme({
        type: this.themeType,
        color: this.accentColor.colorName,
        animation: this.animationsEnabled
      });
    }   
    toggleAnimations(): void {
      this.animationsEnabled = !this.animationsEnabled;
      this.animationsEnabledChange.emit(this.animationsEnabled);
      this.themeState.setTheme({
        type: this.themeType,
        color: this.accentColor.colorName,
        animation: this.animationsEnabled
      });
    }   
    changeAccentColor(color: TColor): void {
      this.accentColor = color;
      this.accentColorChange.emit(this.accentColor);
      this.themeState.setTheme({
        type: this.themeType,
        color: color.colorName,
        animation: this.animationsEnabled
      });
      this.showAccentColorPicker = false;
    }
}
