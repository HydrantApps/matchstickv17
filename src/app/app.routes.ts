import { Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

/**
 * Redirects Unauthorozed users to logn
 * @returns
 */
const redirectUnauthorizeToLogin = () => redirectUnauthorizedTo('');
/**
 * Redirects users to dashboard of they are logged in
 * @returns
 */
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'forgot',
    loadComponent: () =>
      import('./auth/forgot/forgot.component').then((m) => m.ForgotComponent),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./auth/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
    ...canActivate(redirectUnauthorizeToLogin),
  },
];
