Class Components are also called _container_, _stateful_ or _smart_ components. We use class components to group other components are implement much larger functionality than functional components. Class components can do things which functional components can do.

## Hello World
A simple hello world component using Class:
```javascript
class Person extends React.Component {
    render() {
        return <p>I am feeling good</p>;
    }
}
```

## Dynamic Content
Let us write a class component that prints dynamic content.
```javascript
class Person extends React.Component {
    render() {
        return <p>I am feeling good {(new Date()).toLocaleString()}</p>;
    }
}
```

## `props`
We can make our class components accept properties.
```javascript
class Person extends React.Component {
    render() {
        return <p>I am {this.props.name} and I love {this.props.love}</p>;
    }
}
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
The content can be received in `this.props.children` property.
```javascript
class Person extends React.Component {
    render() {
        return <p>
            I am {this.props.name} and I love {this.props.love}
            {this.props.children}
            </p>;
    }
}
```

## State
`state` of a component stores values internal to a component. It is not available for functional components.
```javascript
class Clock extends React.Component {
    // Initializing a state
    state = {
        count : 1
    }

    render() {
        // Using the state
        return this.state.count;
    }
}
```