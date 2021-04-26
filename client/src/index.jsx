import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Etsy.com</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));