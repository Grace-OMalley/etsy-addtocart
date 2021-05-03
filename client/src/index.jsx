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
      detailToggle: true,
      descToggle: true,
      item: {}
    };
    this.detailClick = this.detailClick.bind(this);
    this.descClick = this.descClick.bind(this);
  }

  componentDidMount() {
    API.readAll((data) => {
      this.setState({
        item: data
      });
    });
  }

  detailClick() {
    console.log('DETAIL CLICK!');
    this.setState({
      detailToggle: !this.state.detailToggle
    });
  }

  descClick() {
    console.log('DESC CLICK!');
    this.setState({
      descToggle: !this.state.descToggle
    });
  }

  render() {
    return (
      <div className="outerDiv">
        <Title item={this.state.item}/>
        <Price item={this.state.item}/>
        <Specifications item={this.state.item}/>
        <br/>
        <AddToCart item={this.state.item}/>
        <br/>
        <OthersFavorited item={this.state.item}/>
        <br/>
        <ArrivesBy item={this.state.item}/>
        <br/>
        <br/>
        <br/>
        <ItemDetails
          item={this.state.item}
          detailClick={this.detailClick}
          toggle={this.state.detailToggle}
        />
        <br/>
        <br/>
        <ItemDescription
          item={this.state.item}
          descClick={this.descClick}
          toggle={this.state.descToggle}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));