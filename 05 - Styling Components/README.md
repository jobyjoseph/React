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