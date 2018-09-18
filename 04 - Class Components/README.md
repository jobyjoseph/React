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
```javascript
<Person name="Joby" love="food"/>
```

## Component Children
Components can accept the content that comes between start and closing tags. Like:
```javascript
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
`state` is declared, initialized and used as a normal class property. But the speciality of `state` is that, if the value of state is updated, React automatically updates the DOM.

## Updating State
`state` can only be updated using `setState()`. Then only react can automatically rerender the component.

```javascript
class Clock extends React.Component {
    // Initializing a state
    state = {
        count : 1
    }

    increment = () => {
        // Updating state
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}
```
Here when the button updates the state, the count is updated automatically in the component.

## Passing argument to event handler
We can use `.bind()` method to pass arguments to event handler methods. First argument of `.bind()` defines the invocation context for the handler function. Subsequent arguments are passed to handler function as its arguments.
```javascript
class Clock extends React.Component {
    // Initializing a state
    state = {
        count : 1
    }

    increment = (interval = 1) => {
        // Updating state
        this.setState({
            count: this.state.count + interval
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.increment.bind(this, 5)}>Increment</button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}
```

Another way to pass arguments to handler functions is to use _Arrow Functions_.
```javascript
class Clock extends React.Component {
    // Initializing a state
    state = {
        count : 1
    }

    increment = (interval = 1) => {
        // Updating state
        this.setState({
            count: this.state.count + interval
        });
    }

    render() {
        return (
            <div>
                <button onClick={ () => this.increment(10)}>Increment</button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}
```
Here we are passing `10` to the handler function. Using `.bind()` method is more efficient.

## Two way binding
Say we have a textbox in our Clock component to accept the increment value. So in one direction, we need to get that value from textbox and save in state. Later in reverse direction our component should use that state to update the component. That is two way binding.
```javascript
class Clock extends React.Component {
    // Initializing a state
    state = {
        count : 1,
        interval : 1
    }

    increment = () => {
        // Updating state
        this.setState({
            count: this.state.count + this.state.interval
        });
    }

    inputChangeHandler = (event) => {
        // Get new value from input and update state
        this.setState({
            interval : event.target.value * 1 // convert to number
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.inputChangeHandler} />
                <button onClick={this.increment}>Increment</button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}
```
`event.target.value` will have the value from input control.