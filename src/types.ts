const linkTypes = ['post', 'group'] as const;

interface NotificationLink {
  type: typeof linkTypes[number];
  label: string;
  href: string;
}

interface NotificationProfile {
  name: string;
  href: string;
}

interface NotificationImage {
  src: string;
  alt: string;
  href: string;
}

interface NotificationPrivateMessage {
  content: string;
  href: string;
}

export interface AppNotification {
  id: string;
  profile: NotificationProfile;
  avatar: string;
  text: string;
  read: boolean;
  createdAt: string;
  link?: NotificationLink;
  private_message?: NotificationPrivateMessage;
  image?: NotificationImage;
}

export type NotificationStore = AppNotification[];
