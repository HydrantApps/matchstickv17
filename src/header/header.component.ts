import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../app/auth/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faHome,
  faBook,
  faSignInAlt,
  faSignOutAlt,
  faIdCard,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isMenuOpen = false;
  faUser = faUser;
  faHome = faHome;
  faBook = faBook;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faIdCard = faIdCard;
  faUserPlus = faUserPlus;

  toggleMenuOpen = () => {
    this.isMenuOpen = !this.isMenuOpen;
  };

  logout = () => {
    this.authService.signOut().subscribe({
      next: (data) => this.router.navigate(['/home']),
    });
  };
}
