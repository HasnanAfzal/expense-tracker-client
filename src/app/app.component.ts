import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideLeftRightAnimations } from './shared-animations/slide-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideLeftRightAnimations
  ]
})
export class AppComponent {
  title = 'expense-tacker-client';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
