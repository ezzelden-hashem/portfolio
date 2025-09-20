import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/ezzelden-hashem/portfolio/refs/heads/main/src/assets/docs/ezzelden-hashem-cv.pdf';
    link.download = 'ezzelden-hashem-cv.pdf';
    link.click();
  }

}
