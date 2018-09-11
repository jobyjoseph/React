// Create 'Greeting' component
class Greeting extends React.Component {
    render() {
        return React.createElement('h1', null, 'Hi, Joby');
    }
}

// Inject 'Greeting' component to DOM
ReactDOM.render(
    React.createElement(Greeting),
    document.getElementById('root')
);