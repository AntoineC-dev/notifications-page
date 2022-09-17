import { Component, Show } from 'solid-js';
import type { AppNotification } from '../../types';

import styles from './Notification.module.css';

const Notification: Component<AppNotification> = (props: AppNotification) => {
  return (
    <article class={styles.container}>
      <div class={styles.avatar} aria-hidden="true">
        <img src={props.avatar} alt="" />
      </div>
      <div class={styles.content}>
        <span class={styles.name}>{props.name}</span>
        <span class={styles.text}>{props.text}</span>
        <Show when={props.link}>
          <a href="#" data-type={props.link?.type} class={styles.link}>
            {props.link?.label}
          </a>
        </Show>
        <Show when={!props.read}>
          <span class={styles.dot} aria-hidden="true"></span>
        </Show>
      </div>
      <Show when={props.image}>
        <div class={styles.image} aria-hidden="true">
          <img src={props.image} alt="" />
        </div>
      </Show>
    </article>
  );
};

export default Notification;
