import { Component, Show } from 'solid-js';
import type { AppNotification } from '../../types';

import styles from './Notification.module.css';

const Notification: Component<AppNotification> = (props: AppNotification) => {
  return (
    <article classList={{ [styles.container]: true, [styles.read]: props.read }}>
      <div class={styles.avatar} aria-hidden="true">
        <img src={props.avatar} alt="" />
      </div>
      <div class={styles.content}>
        <p class={styles.top}>
          <a href={props.profile.href} class={styles.name}>
            {props.profile.name}
          </a>
          <span>{props.text}</span>
          <Show when={props.link}>
            <a href={props.link?.href} data-type={props.link?.type} class={styles.link}>
              {props.link?.label}
            </a>
          </Show>
        </p>
        <span class={styles.createdAt}>{props.createdAt}</span>
        <Show when={props.private_message}>
          <a href={props.private_message?.href} class={styles.privateMessage}>
            {props.private_message?.content}
          </a>
        </Show>
      </div>
      <Show when={props.image}>
        <a href={props.image?.href} class={styles.image}>
          <span class="sr-only">{props.image?.alt}</span>
          <img src={props.image?.src} alt={props.image?.alt} />
        </a>
      </Show>
    </article>
  );
};

export default Notification;
