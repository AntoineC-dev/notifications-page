import type { Component } from 'solid-js';

import { Header } from './components';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.container}>
      <Header />
    </div>
  );
};

export default App;
