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
    profile: { name: 'Mark Webber', href: '#' },
    text: 'reacted to your recent post',
    createdAt: '1m ago',
    read: false,
    link: {
      type: 'post',
      label: 'My first tournament today!',
      href: '#',
    },
  },
  {
    avatar: avatarAngela,
    profile: { name: 'Angela Gray', href: '#' },
    text: 'followed you',
    createdAt: '5m ago',
    read: false,
  },
  {
    avatar: avatarJacob,
    profile: { name: 'Jacob Thompson', href: '#' },
    text: 'has joined your group',
    createdAt: '1 day ago',
    read: false,
    link: {
      type: 'group',
      label: 'Chess Club',
      href: '#',
    },
  },
  {
    avatar: avatarRizky,
    profile: { name: 'Rizky Hasanuddin', href: '#' },
    text: 'sent you a private message',
    createdAt: '5 days ago',
    read: true,
    private_message: {
      content:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      href: '#',
    },
  },
  {
    avatar: avatarKimberly,
    profile: { name: 'Kimberly Smith', href: '#' },
    text: 'commented on your picture',
    createdAt: '1 week ago',
    read: true,
    image: {
      src: imageKimberly,
      alt: 'Clear description of the image',
      href: '#',
    },
  },
  {
    avatar: avatarNathan,
    profile: { name: 'Nathan Peterson', href: '#' },
    text: 'reacted to your recent post',
    createdAt: '2 weeks ago',
    read: true,
    link: {
      type: 'post',
      label: '5 end-game strategies to increase your win rate',
      href: '#',
    },
  },
  {
    avatar: avatarAnna,
    profile: { name: 'Anna Kim', href: '#' },
    text: 'left the group',
    createdAt: '2 weeks ago',
    read: true,
    link: {
      type: 'group',
      label: 'Chess Club',
      href: '#',
    },
  },
];
