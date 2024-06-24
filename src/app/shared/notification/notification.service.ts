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
  notification = signal<Notification>({});
  constructor() {}

  notify = (msg: string, NotificationType: NotificationTypeEnum) => {
    console.log('enum', NotificationType);
    this.notification.set({ message: msg, type: NotificationType });
  };
}
