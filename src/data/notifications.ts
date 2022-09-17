import type { AppNotification } from '../types';

import avatarMark from '../assets/avatar-mark-webber.webp';
import avatarAngela from '../assets/avatar-angela-gray.webp';
import avatarJacob from '../assets/avatar-jacob-thompson.webp';
import avatarRizky from '../assets/avatar-rizky-hasanuddin.webp';
import avatarKimberly from '../assets/avatar-kimberly-smith.webp';
import avatarNathan from '../assets/avatar-nathan-peterson.webp';
import avatarAnna from '../assets/avatar-anna-kim.webp';

import imageKimberly from '../assets/image-chess.webp';

export const NOTIFICATIONS: AppNotification[] = [
  {
    avatar: avatarMark,
    name: 'Mark Webber',
    text: 'reacted to your recent post',
    createdAt: '1m ago',
    read: false,
    post: 'My first tournament todat!',
  },
  {
    avatar: avatarAngela,
    name: 'Angela Gray',
    text: 'followed you',
    createdAt: '5m ago',
    read: false,
  },
  {
    avatar: avatarJacob,
    name: 'Jacob Thompson',
    text: 'has joined your group',
    createdAt: '1 day ago',
    read: false,
    group: 'Chess Club',
  },
  {
    avatar: avatarRizky,
    name: 'Rizky Hasanuddin',
    text: 'sent you a private message',
    createdAt: '5 days ago',
    read: true,
    private_message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    avatar: avatarKimberly,
    name: 'Kimberly Smith',
    text: 'commented on your picture',
    createdAt: '1 week ago',
    read: true,
    image: imageKimberly,
  },
  {
    avatar: avatarNathan,
    name: 'Nathan Peterson',
    text: 'reacted to your recent post',
    createdAt: '2 weeks ago',
    read: true,
    post: '5 end-game strategies to increase your win rate',
  },
  {
    avatar: avatarAnna,
    name: 'Anna Kim',
    text: 'left the group',
    createdAt: '2 weeks ago',
    read: true,
    group: 'Chess Club',
  },
];
