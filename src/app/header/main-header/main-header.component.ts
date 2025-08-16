import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonStateService } from '../../services/state-management/common-state.service';

@Component({
  selector: 'app-main-header',
  imports: [RouterLink],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
  host: {
    
  }
})
export class MainHeaderComponent {
  commonState = inject(CommonStateService);
  triggerNavBtn()
  {
    this.commonState.triggerNavBtn();
  }
}
