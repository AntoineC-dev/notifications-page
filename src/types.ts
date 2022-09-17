export interface AppNotification {
  name: string;
  avatar: string;
  text: string;
  read: boolean;
  post?: string;
  group?: string;
  createdAt: string;
  private_message?: string;
  image?: string;
}

export interface NotificationStore {
  notifications: AppNotification[];
}
