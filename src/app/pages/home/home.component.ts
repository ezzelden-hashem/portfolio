import { Component, inject } from '@angular/core';
import { HeroComponent } from "../../hero/hero.component";
import { CommonStateService } from '../../services/state-management/common-state.service';
import { RouterLink } from '@angular/router';
import { NavMenuPageComponent } from "../../header/nav-menu-page/nav-menu-page.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, NavMenuPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  commonState = inject(CommonStateService);
  
}
