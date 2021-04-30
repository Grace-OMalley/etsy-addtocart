import React from 'react';
import ReactDOM from 'react-dom';
import API from './API.js';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
    //func bind here
  }

  componentDidMount() {
    API.readAll((data) => {
      console.log('CLIENT DATA: ', data);
      this.setState({
        item: data
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Etsy.com</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));