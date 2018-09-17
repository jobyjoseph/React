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
```javascript
const person = () => <p>I am feeling good {(new Date()).toLocaleString()}</p>
```

## `props`
We can make our functional components accept properties.
```javascript
const person = (props) => <p>I am {props.name} and I love {props.love}</p>
```
and use it like
```html
<Person name="Joby" love="food"/>
```

## Component Children
Components can accept the content that comes between start and closing tags. Like:
```html
<Person name="Joby" love="food">
    My favorite is idly and vada
</Person>
```
The content can be received in `props.children` property.
```javascript
const person = (props) => (<p>
    I am {props.name} and I love {props.love}.
    {props.children}
</p>);
```