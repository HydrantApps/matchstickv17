import { Component, inject } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  notifications = inject(NotificationService);

  dismiss = () => {
    this.notifications.notification.set({
      message: undefined,
    });
  };
}
