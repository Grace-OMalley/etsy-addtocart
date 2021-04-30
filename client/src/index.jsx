import React from 'react';
import ReactDOM from 'react-dom';
import API from './API.js';
import './styles.css';

import Title from './components/Title.jsx';
import Price from './components/Price.jsx';
import Specifications from './components/Specifications.jsx';
import AddToCart from './components/AddToCart.jsx';
import OthersFavorited from './components/OthersFavorited.jsx';
import ArrivesBy from './components/ArrivesBy.jsx';
import ItemDetails from './components/ItemDetails.jsx';
import ItemDescription from './components/ItemDescription.jsx';

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
      <div className="outerDiv">
        <Title item={this.state.item}/>
        <Price item={this.state.item}/>
        <Specifications item={this.state.item}/>
        <AddToCart item={this.state.item}/>
        <OthersFavorited item={this.state.item}/>
        <ArrivesBy item={this.state.item}/>
        <ItemDetails item={this.state.item}/>
        <ItemDescription item={this.state.item}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));