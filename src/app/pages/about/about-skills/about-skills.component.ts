import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutSkillsCardComponent } from './about-skills-card/about-skills-card.component';
import { ExploreMoreSections } from '../../../services/content-management/content-management-data/explore-more.data';
import { AboutSkillsCards } from '../../../services/content-management/content-management-data/about-page.content';

@Component({
  selector: 'app-about-skills',
  imports: [ AboutSkillsCardComponent ],
  templateUrl: './about-skills.component.html',
  styleUrl: './about-skills.component.css'
})
export class AboutSkillsComponent {
  exploreSections = AboutSkillsCards;
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  scrollOffset = (window.innerWidth <= 700)? 250 : 500;

  ngAfterViewInit(): void {
    
  }
  scrollRight()
  {
    this.scrollOffset = (window.innerWidth <= 600)? 250 : 500;
    this.slider.nativeElement.scrollBy({left: this.scrollOffset, behavior: 'smooth'})
  }
  scrollLeft()
  {
    this.scrollOffset = (window.innerWidth <= 600)? 250 : 500;
    this.slider.nativeElement.scrollBy({left: -this.scrollOffset, behavior: 'smooth'})
  }
}
