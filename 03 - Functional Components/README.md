A React Component in its very simple form is a function that returns a set of JSX.
```javascript
const person = () => {
    return <p>I am feeling good</p>
}
```
Above code is an example of _functional component_ also known in other names such as _presentational_, _dumb_ or _stateless_ components.
[Demo: Functional Component](https://codepen.io/jobyjoseph/pen/qMYvxB)

## Dynamic Content
We can output dynamic content by evaluating expressions inside functional components. Below component shows current date and time each time the component is called.