import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterCredientials } from '../auth.types';
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
  faUser,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormUtilsService } from '../../shared/form-utils.service';
import { NotificationComponent } from '../../shared/notification/notification.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    CommonModule,
    NotificationComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  notifiations = inject(NotificationService);
  router = inject(Router);
  formUtils = inject(FormUtilsService);
  faEnvelope = faEnvelope;

  faCheck = faCheck;
  faLock = faLock;
  faSignInAlt = faSignInAlt;
  faUser = faUser;
  faTimes = faTimes;

  registerForm = this.formBuilder.group({
    username: [
      '',
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
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
      Validators.compose([
        Validators.required,
        Validators.minLength(8),
        this.formUtils.createPasswordStrengthValidator(),
      ]),
    ],
    agreeToTos: ['', Validators.requiredTrue],
  });

  signUp = () => {
    this.authService
      .emailSignUp(this.registerForm.value as RegisterCredientials)
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
