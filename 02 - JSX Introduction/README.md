## Introducing JSX

JSX looks like html inside JavaScript. It has the full power of JavaScript. JSX is converted to pure JavaScript which browser can understand by using a traspiler like _babel_.

```javascript
const element = <h1>Hello, world!</h1>;
```

[Demo: Hello World using JSX](https://codepen.io/jobyjoseph/pen/qMYvxB)

Even though we are not using `h1` in JSX, it is not HTML H1 tag. It is a custom element defined inside React library.


#### Embedding Expressions in JSX

We can embed JavaScript expressions in JSX using `{}`

```javascript
const name = "Joby";
const element = <h1>Name is {name}</h1>;
```

`{}` can contain any JavaScript expressions like conditions, arithmetic calculations and so on.

[Demo: Expressions in JSX](https://codepen.io/jobyjoseph/pen/YOLggp)

#### Camel Cased Custom Attributes

Since JSX is writing HTML like syntax inside JS, they have converted JS keywords like `class` to `className`.
```javascript
const element = <h1 class="heading">I am Heading</h1>; // Incorrect
const element = <h1 className="heading">I am Heading</h1>; // Correct
```