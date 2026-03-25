# health.track

A personal daily health tracker — medicine reminders, meal plan, walking goals and a 7-day streak calendar.

## Project Structure

```
healthtrack/
│
├── index.html              # App shell — no inline CSS or JS
│
├── css/
│   ├── variables.css       # Design tokens (colours, radius) + base reset + icon utils
│   ├── header.css          # Sticky header, progress bar, nav tabs
│   ├── components.css      # Cards, tags, info-cards, section labels, animations
│   └── layout.css          # Stats grid, streak row, toast, bottom nav, reset button
│
├── js/
│   ├── storage.js          # LocalStorage read/write layer
│   ├── render.js           # Builds all tab HTML from data/tasks.js
│   ├── ui.js               # Tab switching, toast, streak calendar, date badge
│   └── app.js              # Main controller — wires everything together
│
└── data/
    └── tasks.js            # All task definitions, avoid/limit data, reminders
```

## How to run

Just open `index.html` in any browser. No build step, no dependencies, no server needed.

```bash
open index.html
# or
npx serve .
```

## Customising tasks

All tasks live in `data/tasks.js`. To add, remove or edit a task, find the relevant group and modify its `items` array.

```js
{ id: 'c-my-task', icon: 'medication', iconColor: 'ic-red',
  title: 'My Task', sub: 'Some description',
  tag: 'DAILY', tagColor: 'tag-green' }
```

Icons are from [Google Material Symbols Rounded](https://fonts.google.com/icons).

## Tech

- Vanilla HTML / CSS / JS — zero frameworks
- Google Fonts: Syne + DM Sans
- Google Material Symbols Rounded icons
- LocalStorage for daily persistence + 7-day history
