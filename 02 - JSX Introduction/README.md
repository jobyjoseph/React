## Introducing JSX

JSX looks like html inside JavaScript. It has the full power of JavaScript. JSX is converted to pure JavaScript which browser can understand by using a traspiler like _babel_.

```javascript
const element = <h1>Hello, world!</h1>;
```

[Demo: Hello World using JSX](https://codepen.io/jobyjoseph/pen/qMYvxB)


### Embedding Expressions in JSX

We can embed JavaScript expressions in JSX using `{}`

```javascript
const name = "Joby";
const element = <h1>Name is {name}</h1>;
```

`{}` can contain any JavaScript expressions like conditions, arithmetic calculations and so on.

[Demo: Expressions in JSX](https://codepen.io/jobyjoseph/pen/YOLggp)