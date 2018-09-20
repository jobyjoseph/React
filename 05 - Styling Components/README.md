## Adding CSS
We can add reference to a css file using `import` statement. We can then add styles to elements using `className` attribute like:
```javascript
import React from 'react';
import './Person.css';

const person = (props) => (
<div className="Person">
    <h2>{props.name}</h2>
    <p>{props.children}</p>
</div>);

export default person;
```
If using webpack to create the bundle, webpack will inject the required css to html. Webpack will also add auto prefixing for styles whereever needed to ensure cross browser compatibility.

## Inline Styles
We can use `style` attribute to implement styles.
```javascript
const person = (props) => {
    const myStyle = {
        color: '#ffcc00'
    }
    return (
    <div className="Person">
        <h2 style={myStyle}>{props.name}</h2>
        <p>{props.children}</p>
    </div>);
}
```
Input for style attribute is an object.

## `radium` Package
We can bring pseudo styles like _hover_ effect with inline styles using [radium](https://www.npmjs.com/package/radium) package. We can also bring media query functionality. In the example below, the green color of the button turns red on hover.
```javascript
import React, { Component } from 'react';
import Radium from 'radium';

class App extends Component {
  render() {

    const style = {
      backgroundColor: 'green',
      height: '30px',
      border: 'none',
      color: '#fff',
      margin: '100px',
      ':hover': {
        backgroundColor: 'red'
      }
    }

    return (
      <div>
        <button style={style}>Click Me</button>
      </div>
    );
  }
}

export default Radium(App);
```
Observe wrapping of `App` inside `Radium` component. The hover state is mentioned using `:hover` inside `style` object.

## CSS Modules
If we create a css file for one component, the styles are not scoped for only that component. Any other components which use the same style will consume that. __CSS Modules__ can solve this issue.

If we are using Webpack for bundling, we define how Webpack should treat css in webpack config file. Inside webpack config, add `modules: true` and `localIdentName: '[name]__[local]__[hash:base64:5]'` to css-loader `options` object. `localIdentName` gives a unique component specific class name to component elements while creating the bundle.

Now import the css file in your components like
```javascript
import classes from './Header.css';
```
and use the class names as object properties.
```javascript
<h1 className={classes.title}>Header Title should be Red</h1>
```
So now, css-loader is creating the `classes` object which renders unique class names.

Suppose if you want to import and use a common css file which defines styles for `.error`, `.warning` and so on, use `:global` flag. Eg: in our css file:
```css
:global .error {
    color: "red"
}
```
Then we can use it directly as a string in our component. Eg: `className="error"`