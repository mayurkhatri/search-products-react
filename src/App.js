import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(<FilterableProductTable/>);
  }
}

class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    return(<div></div>);
  }
}

class ProductTable extends Component {
  render() {
    return (
      <div>
        <ProductCategoryRow/>
        <ProductRow/>
      </div>
    );
  }
}

class ProductCategoryRow extends Component {
  render(){
    return(<div></div>);
  }
}

class ProductRow extends Component {
  render() {
    return (<div></div>);
  }
}

export default App;
