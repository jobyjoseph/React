React is a JavaScript library for building user interfaces. Building blocks in a React website are _components_ and components can be treated as reusable custom html.

## Hello World

To work with React, we need to add reference to 2 files `react.js` and `react-dom.js`.
```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```
Above code shows the CDN links to refer React v16. `react.js` contains code to create react components. `react-dom.js` contains code to insert the component to browser DOM.

>[Project 1: Hello World React project](https://github.com/jobyjoseph/React/tree/01-react-hello-world) will give us an idea how we can quickly create a React component and use it in our html page. This solution does not use JSX

`React.createElement()` used in the project creates new elements inside a component.