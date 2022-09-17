import { createStore } from 'solid-js/store';
import type { NotificationStore } from '../types';
import { NOTIFICATIONS } from '../data';

const [store, setStore] = createStore<NotificationStore>(NOTIFICATIONS);

export const setAllNotificationsAsRead = () => setStore((notification) => !notification.read, 'read', true);

export default store;
