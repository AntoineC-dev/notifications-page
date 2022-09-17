# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Contribution](#contribution)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

Bonus:

- Mark a notification as read when clicking on any link inside it.

### Screenshot

- Tablet (768x1024)

![Fullpage Tablet](./fullpage-tablet.png)

- Mobile (375x760)

![Fullpage Mobile](./fullpage-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://notifications-page-acdev.vercel.app/](https://notifications-page-acdev.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Typescript](https://www.typescriptlang.org/)
- [SolidJs](https://www.solidjs.com/)
- [Postcss](https://postcss.org/)

### What I learned

This was a project with a small amount of code/styles. I have been doing challenges 7/7 for more than 2 months now and I wanted to know how much I improved. I did it in 4 hours which is still a bit too long I think but I had to create the data object + the usual TS interfaces by hand since there was no json in the starter-files.

#### The "Owl selector" -- (_ + _)

Helpful when you need to add margin between elements without using `flex` or `grid`. It will apply the margin only to elements that have another element before without raising the specificity.

```css
.top > * + * {
  margin-left: 6px;
}
```

### Useful resources

- [Solidjs Documentation](https://www.solidjs.com/docs/latest/api) - Une bibliothèque JavaScript déclarative, efficace et flexible pour la création d'interfaces utilisateur.
- [Postcss Preset Env](https://preset-env.cssdb.org/) - Start using modern CSS today.

## Author

- Frontend Mentor - [@AntoineC-dev](https://www.frontendmentor.io/profile/AntoineC-dev)

## Contribution

You can use this project for whatever you want. Don't forget to leave a ⭐.

- Fork the project to add it to your githug repositories.
- Clone it on your local machine from you repositories.
- Install all the dependencies by running `npm install` or `yarn` or `pnpm` from a terminal located in the project.
- Open the project in your editor and start coding.
