import { Component, computed, effect, inject, signal } from '@angular/core';
import { SafeLinkDirective } from '../self-link.directive';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkDirective]
})
export class LearningResourcesComponent {

  authService = inject(AuthService)
  isLoggedIn = signal(false);
  constructor(){
    effect(() => {
        this.authService.activePermission() == 'admin' || this.authService.activePermission() == 'user' ? this.isLoggedIn.set(true) : this.isLoggedIn.set(false);
        console.log(this.isLoggedIn())
    },{allowSignalWrites: true})
  }
  onLogout(){
    this.authService.logout();
  }
}
