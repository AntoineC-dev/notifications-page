import { Component, For } from 'solid-js';
import notifications from './stores/notifications';

import { Header, Notification } from './components';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.container}>
      <Header />
      <main class={styles.notifications}>
        <For each={notifications}>{(props) => <Notification {...props} />}</For>
      </main>
    </div>
  );
};

export default App;
