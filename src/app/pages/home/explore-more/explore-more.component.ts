import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ExploreCardComponent } from "./explore-card/explore-card.component";
import { ExploreMoreSections } from '../../../services/content-management/content-management-data/explore-more.data';

@Component({
  selector: 'app-explore-more',
  imports: [ExploreCardComponent],
  templateUrl: './explore-more.component.html',
  styleUrl: './explore-more.component.css'
})
export class ExploreMoreComponent implements AfterViewInit{
  exploreSections = ExploreMoreSections;
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  scrollOffset = (window.innerWidth <= 600)? 250 : 500;

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
