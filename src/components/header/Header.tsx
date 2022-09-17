import { Component } from 'solid-js';

import styles from './Header.module.css';

const Header: Component = () => {
  const onClick = () => alert('Marked as read');
  return (
    <header class={styles.container}>
      <h1 class={styles.title}>Notifications</h1>
      <span class={styles.count}>3</span>
      <button onClick={onClick} class={styles.btn}>
        Mark all as read
      </button>
    </header>
  );
};

export default Header;
