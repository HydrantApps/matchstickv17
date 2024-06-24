import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginCredientals } from '../auth.types';
import {
  NotificationService,
  NotificationTypeEnum,
} from '../../shared/notification/notification.service';
import { Router, RouterModule } from '@angular/router';
import {
  faEnvelope,
  faCheck,
  faLock,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationComponent } from '../../shared/notification/notification.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    NotificationComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  notifiations = inject(NotificationService);
  router = inject(Router);
  faEnvelope = faEnvelope;
  faCheck = faCheck;
  faLock = faLock;
  faSignInAlt = faSignInAlt;
  loginForm = this.formBuilder.group({
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.email,
      ]),
    ],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
  });

  signIn = () => {
    this.authService
      .emailSignIn(this.loginForm.value as LoginCredientals)
      .subscribe({
        next: (data) => {
          this.router.navigate(['/dashboard']);
        },
        error: (e) => {
          this.notifiations.notify(e.code, NotificationTypeEnum.ERROR);
        },
      });
  };
}
