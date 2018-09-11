// Create 'Greeting' component
class Greeting extends React.Component {
    render() {
        return <h1>Hi, Joby</h1>
    }
}

const el = document.getElementById('root');
ReactDOM.render(<Greeting />, el);