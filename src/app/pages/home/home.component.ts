import { Component, inject } from '@angular/core';
import { HeroComponent } from "../../hero/hero.component";
import { CommonStateService } from '../../services/state-management/common-state.service';
import { SummaryComponent } from "./summary/summary.component";
import { QuickPortfolioComponent } from "./quick-portfolio/quick-portfolio.component";
import { ExploreMoreComponent } from "./explore-more/explore-more.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SummaryComponent, QuickPortfolioComponent, ExploreMoreComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  commonState = inject(CommonStateService);
  
}
