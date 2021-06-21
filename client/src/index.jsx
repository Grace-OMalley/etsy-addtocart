import React from 'react';
import ReactDOM from 'react-dom';
import API from './API.js';
import './styles.css';

import Title from './components/Title.jsx';
import Price from './components/Price.jsx';
import BestSeller from './components/BestSeller.jsx';
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
      expand: false,
      item: {}
    };
    this.detailClick = this.detailClick.bind(this);
    this.descClick = this.descClick.bind(this);
    this.expandClick = this.expandClick.bind(this);
  }

  componentDidMount() {
    const queryString = window.location.search.slice(8) || '1';
    API.readOne(queryString, (data) => {
      console.log('CLIENT: ', data);
      this.setState({
        item: data
      });
    });
    //=======SEEDING FUNCTION: Part 1 of 2 - Go to server/index.js =======//
    // API.readAll((data) => {
    //   console.log('CLIENT: ', data);
    //   this.setState({
    //     item: data
    //   });
    // });
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

  expandClick() {
    console.log('EXPAND CLICK!');
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    return (
      <div className="outerDiv">
        <Title item={this.state.item}/>
        <br/>
        <BestSeller item={this.state.item}/>
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
          expandClick={this.expandClick}
          expand={this.state.expand}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('addToCart'));

//Client-side design by Devon Poston - SDC TEAM:Slack me for questions