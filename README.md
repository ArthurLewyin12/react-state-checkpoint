# React State Checkpoint

This is my React State checkpoint (Front End Development - React State). It's my first class-based component with a state: a button shows or hides the profile of a person, and a timer shows how long ago the component was mounted.

## What's in App.js

- `App` is a class that extends `Component` (no function component here)
- the state is created in the `constructor`:
  - `person`: an object with `fullName`, `bio`, `imgSrc` and `profession`
  - `shows`: a boolean, `false` at the start so the profile is hidden
  - `secondsSinceMount`: the number of seconds since the component was mounted
- the button calls `toggleProfile`, which does `this.setState` with the opposite of `shows`. When `shows` is `true`, the profile appears (`{shows && <article>...</article>}`), and the text of the button changes between "Show profile" and "Hide profile".
- the timer uses the lifecycle:
  - `componentDidMount` starts a `setInterval` that adds 1 to `secondsSinceMount` every second
  - `componentWillUnmount` stops it with `clearInterval`, so the interval doesn't keep running after the component is gone
  - the seconds are shown as `mm:ss` (for example "Mounted 01:25 ago")

I used `setState` with a function (`prevState => ...`) because the new value depends on the old one.

## The person

I chose Grace Hopper, an American computer scientist who wrote one of the first compilers. Her photo comes from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Commodore_Grace_M._Hopper,_USN_(covered).jpg). It's an official US Navy photo by James S. Davis and it is in the public domain.

## Design

- fonts from Google Fonts: Literata for the titles, Public Sans for the text and IBM Plex Mono for the timer
- an off-white background, black text and a navy blue color for the hover and the profession
- icons from Iconsax (`iconsax-reactjs`): an eye on the button, a timer next to the counter and a briefcase for the profession
- on a phone, the photo goes above the text

## How to run it

```bash
npm install
npm start
```

Then open http://localhost:3000 in the browser.
