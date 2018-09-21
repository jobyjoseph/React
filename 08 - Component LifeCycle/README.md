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
* constructor()
* componentWillMount()
* componentDidMount()
* render()

First `constructor()` gets executed. `constructor()` is an ES6 feature. When React instatiates the Component, it passes the props to contructor as parameter. If we are using `constructor()`, we need to call `super(props)`. Then only expressions like `this.props` will work. We should not put any statements that cause side effects, like calling an API or updating the state.

Second stage, `componentWillMount()` gets executed. We can update state if required inside this lifecycle method. But again as inside constructor, we should not cause any side-effects.

Third stage, `render()` is executed. Executing `render()` does not always update the real DOM of browser. If there is any child components inside `render()`, all those are executed. After all child components are rendered, React moves to fourth stage.

Fourth stage, `componentDidMount()` is executed finally during _Component Creation_. We can cause side effects like API calls here.