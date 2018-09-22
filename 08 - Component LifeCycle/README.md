When React renders a component for us, it goes through different lifecycle phases. Lifecycles methods can be used only in class components.

## `constructor()`

## `componentWillMount()`

## `componentWillReceiveProps()`

## `shouldComponentUpdate()`

## `componentWillUpdate()`

## `componentDidUpdate()`

## `componentDidCatch()`

## `componentDidMount()`

## `componentWillUnmount()`

## `render()`

## Phase 1: Component Creation
Only 4 lifecycle methods are executed during component creation:
* `constructor()`
* `componentWillMount()`
* `render()`
* `coponentDidMount()`

First `constructor()` gets executed. `constructor()` is an ES6 feature. When React instatiates the Component, it passes the props to contructor as parameter. If we are using `constructor()`, we need to call `super(props)`. Then only expressions like `this.props` will work. We should not put any statements that cause side effects, like calling an API or updating the state.

Second stage, `componentWillMount()` gets executed. We can update state if required inside this lifecycle method. But again as inside constructor, we should not cause any side-effects.

Third stage, `render()` is executed. Executing `render()` does not always update the real DOM of browser. If there is any child components inside `render()`, all those are executed. After all child components are rendered, React moves to fourth stage.

Fourth stage, `componentDidMount()` is executed finally during _Component Creation_. We can cause side effects like API calls here. If a component is used _n_ times, `componentDidMount()` of _n_ executions happens after mounting all _n_ components.

## Phase 2: Component Creation
During update of a component, following lifecycle methods are executed in the order: 
* `componentWillReceiveProps(nextProps)`
* `shouldComponentUpdate(nextProps, nextState)`
* `componentWillUpdate(nextProps, nextState)`
* `render()`

First stage: When `componentWillReceiveProps()` is fired, it receives the new set of props as arguments. We can set this new props to local state if needed. We should not do any API calls in this method.

Second stage: `shouldComponentUpdate(nextProps, nextState)` is fired if props or state is changed. It gets the new set of props and state. If this method returns `false`, component is not updated. If this method returns `true`, only then control is moved towards next lifecycle method. We should not do any API calls here also.

Third stage: Inside `componentWillUpdate(nextProps, nextState)` also, we should NOT call any API calls.

Fourth stage: `render()` will update all child components. After updating all child components, react moves to fifth stage.

Fifth stage: `componentDidUpdate()` . We can do API calls here.