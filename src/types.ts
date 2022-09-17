const linkTypes = ['post', 'group'] as const;

interface NotificationLink {
  type: typeof linkTypes[number];
  href: string;
}

export interface AppNotification {
  name: string;
  avatar: string;
  text: string;
  read: boolean;
  link?: NotificationLink;
  createdAt: string;
  private_message?: string;
  image?: string;
}

export interface NotificationStore {
  notifications: AppNotification[];
}
