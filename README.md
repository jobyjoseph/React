React is a JavaScript library for building user interfaces.

**Recommended Toolchains**

- If you’re learning React or creating a new single-page app, use [Create React App](https://github.com/facebook/create-react-app).
- If you’re building a server-rendered website with Node.js, try [Next.js](https://nextjs.org/).
- If you’re building a static content-oriented website, try [Gatsby](https://www.gatsbyjs.org/).

All React components must act like pure functions with respect to their props. ie. Inside a component, we should not change the value of props.

[1. Add JSX to React Project](https://github.com/jobyjoseph/React/tree/01-add-jsx-to-project)

## Introducing JSX

JSX looks like html inside JavaScript

```javascript
const element = <h1>Hello, world!</h1>;
```

It has the full power of JavaScript. We do not have to wrap JSX inside quotes.

### Embedding Expressions in JSX

We can embed JavaScript expressions in JSX using `{}`

```javascript
const name = "Joby";
const element = <h1>Name is {name}</h1>;
```

`{}` can contain any JavaScript expressions like conditions, arithmetic calculations and so on.
