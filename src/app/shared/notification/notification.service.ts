import { Injectable, signal } from '@angular/core';

export type Notification = {
  message?: string;
  type?: NotificationTypeEnum;
};

export enum NotificationTypeEnum {
  SUCCESS = 'is-success',
  ERROR = 'is-danger',
  WARNING = 'is-warning',
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  userProfileNotifications = false;
  notification = signal<Notification>({});
  constructor() {
    if (!('Notification' in window)) {
      console.warn('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      if (this.userProfileNotifications) {
        const notification = new Notification('Welome to Matchstick');
      }
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          const notification = new Notification(
            'Thank you for Enabling Browser Notifications',
          );
        }
      });
    }
  }

  notify = (msg: string, NotificationType: NotificationTypeEnum): void => {
    console.log('enum', NotificationType);
    this.notification.set({ message: msg, type: NotificationType });
    if (this.userProfileNotifications) {
      const notification = new Notification(msg);
    }
  };
}
