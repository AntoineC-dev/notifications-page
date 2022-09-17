import { Component, createMemo } from 'solid-js';
import notifications, { setAllNotificationsAsRead } from '../../stores/notifications';

import styles from './Header.module.css';

const Header: Component = () => {
  const unreadCount = createMemo(() => notifications.filter((n) => !n.read).length);
  return (
    <header class={styles.container}>
      <h1 class={styles.title}>Notifications</h1>
      <span class={styles.count}>{unreadCount()}</span>
      <button onClick={setAllNotificationsAsRead} class={styles.btn}>
        Mark all as read
      </button>
    </header>
  );
};

export default Header;
