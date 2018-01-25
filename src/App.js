import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PRODUCTS = [{category: "VCD", price: "Rs. 100", stocked: false, name: "Latest Movie"}, {category: "VCD", price: "Rs. 100", stocked: true, name: "Yoga"}, {category: "VCD", price: "Rs. 100", stocked: true, name: "Fitness"},
{category: "Electronics", price: "Rs. 3000", stocked: true, name: "Fast track watch"}, {category: "Electronics", price: "Rs. 10000", stocked: true, name: "LG washing machine"}]

class App extends Component {
  render(){
    return(<FilterableProductTable/>);
  }
}

class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {searchText: '', onlyProductsInStock: false};
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleIsStockedChange = this.handleIsStockedChange.bind(this);
  }

  handleSearchTextChange(searchText){
    this.setState({searchText: searchText});
  }

  handleIsStockedChange(onlyProductsInStock){
    this.setState({onlyProductsInStock: onlyProductsInStock});
  }

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} onProductsInStockChange={this.handleIsStockedChange} onSearchTextChange={this.handleSearchTextChange}/>
        <ProductTable products={PRODUCTS} searchText={this.state.searchText} onlyProductsInStock={this.state.onlyProductsInStock} />
      </div>
    );
  }
}

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleIsStockedChange = this.handleIsStockedChange.bind(this);
  }

  handleSearchTextChange(e){
    this.props.onSearchTextChange(e.target.value);
  }

  handleIsStockedChange(e){
    this.props.onProductsInStockChange(e.target.checked);
  }

  render() {
    const searchText = this.props.searchText;
    const onlyProductsInStock = this.props.onlyProductsInStock;
    return(
      <form>
        <input id="searchInput" type="text" placeholder="Search..."  value={searchText} onChange={this.handleSearchTextChange}></input>
        <p>
          <input type="checkbox" checked={onlyProductsInStock} onChange={this.handleIsStockedChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class ProductTable extends Component {
  render() {
    var rows = [];
    var iteratedCategories = [];
    const searchText = this.props.searchText;
    const onlyProductsInStock = this.props.onlyProductsInStock;
    this.props.products.forEach((product) => {
      if(iteratedCategories.indexOf(product.category) === -1){
        iteratedCategories.push(product.category);
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        );
      }
      if(product.name.indexOf(searchText) === -1) {
        return;
      }
      if(onlyProductsInStock){
        if(product.stocked !== onlyProductsInStock){
          return;
        }
      }
      rows.push(
        <ProductRow product={product} key={product.name} />
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Name</th>
              <th colSpan="2">Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

class ProductCategoryRow extends Component {
  render(){
    const category = this.props.category;
    return(
      <tr>
        <td><h2>{category}</h2></td>
      </tr>
    );
  }
}

class ProductRow extends Component {
  render(){
    const product = this.props.product;
    return(
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default App;