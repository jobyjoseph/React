React is a JavaScript library for building user interfaces. Building blocks in a React website are _components_ and components can be treated as reusable custom html.

## Hello World

To work with React, we need to add reference to 2 files `react.js` and `react-dom.js`.
```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```
Above code shows the CDN links to refer React v16. `react.js` contains code to create react components. `react-dom.js` contains code to insert the component to browser DOM.

>[Project 1: Hello World React project](https://github.com/jobyjoseph/React/tree/01-react-hello-world) will give us an idea how we can quickly create a React component and use it in our html page. This solution does not use JSX


## Introducing JSX

JSX looks like html inside JavaScript. It has the full power of JavaScript. JSX is converted to pure JavaScript which browser can understand by using a traspiler like _babel_.

```javascript
const element = <h1>Hello, world!</h1>;
```

Let us see how we can rewrite _Project 1_ using JSX.

### Embedding Expressions in JSX

We can embed JavaScript expressions in JSX using `{}`

```javascript
const name = "Joby";
const element = <h1>Name is {name}</h1>;
```

`{}` can contain any JavaScript expressions like conditions, arithmetic calculations and so on.

**Recommended Toolchains**

- If you’re learning React or creating a new single-page app, use [Create React App](https://github.com/facebook/create-react-app).
- If you’re building a server-rendered website with Node.js, try [Next.js](https://nextjs.org/).
- If you’re building a static content-oriented website, try [Gatsby](https://www.gatsbyjs.org/).

All React components must act like pure functions with respect to their props. ie. Inside a component, we should not change the value of props.

[1. Add JSX to React Project](https://github.com/jobyjoseph/React/tree/01-add-jsx-to-project)
