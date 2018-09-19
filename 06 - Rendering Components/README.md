## Conditions in Rendering

### Ternary Operator
We can use ternary operator inside render function to implement conditional rendering.
```javascript
class App extends Component {
  render() {
    
    let age = 32;

    return (
      <div>
        {
          (age <= 60) ? (
            <h1>You are not a senior citizen</h1>
          ) : (
            <h1>You are a senior citizen</h1>
          )
        }
      </div>
    );
  }
}
```
But we cannot use `if..else` directly inside return statement. If we do not want to render anything, return `null`.

### `if..else`
If we need to use `if..else`, move it outside the return statement.
```javascript
class App extends Component {

  render() {
    
    let age = 32;

    let html;
    if (age <= 60) { 
      html = <h1>You are not a senior citizen</h1>;
    } else {
      html = <h1>You are a senior citizen</h1>;
    }

    return (
      <div>
        {html}
      </div>
    );
  }
}
```
JSX can be assigned to a variable as we used `html` here. Later it can be used in the `return` statement.

### Lists
To render a list of items from an array, we can use `map()` method of `Array`.
```javascript
class App extends Component {

  render() {
    
    let students = ["Maria", "John", "Jonathan"];

    return (
      <div>
        {students.map(name => (
          <h1>{name}</h1>
        ))}
      </div>
    );
  }
}
```
Above code will throw a warning `Each child in an array or iterator should have a unique "key" prop.`. To solve that we need to add a `key` attribute with a unique value to `h1` element. This `key` attribute is used by react interally to efficiently manipulate DOM.

Here is a component which renders a list with `key` attribute. Also it attaches an event to `h1` which deletes the component on click.
```javascript
class App extends Component {

  state = {
    students: [
      { id: 1, name: "Maria" }, 
      { id: 2, name: "John" }, 
      { id: 3, name: "Jonathan" }
    ]
  };

  deleteNameHandler = (index) => {
    const students = [...this.state.students];
    students.splice(index, 1);
    this.setState({
      students
    });
  }

  render() {
    return (
      <div>
        {this.state.students.map((student, index) => (
          <h1 key1={student.id} onClick={() => this.deleteNameHandler(index)}>{student.name}</h1>
        ))}
      </div>
    );
  }
}
```