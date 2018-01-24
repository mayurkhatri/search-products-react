import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PRODUCTS = [{category: "VCD", price: "Rs. 100", stocked: true, name: "Latest Movie"}, {category: "VCD", price: "Rs. 100", stocked: true, name: "Yoga"}, {category: "VCD", price: "Rs. 100", stocked: true, name: "Fitness"},
{category: "Electronics", price: "Rs. 3000", stocked: true, name: "Fast track watch"}, {category: "Electronics", price: "Rs. 10000", stocked: true, name: "LG washing machine"}]

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
        <ProductTable products={PRODUCTS}/>
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    return(
      <form>
        <input type="text" placeholder="Search..."></input>
        <p>
          <input type="checkbox" />
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
    //rows = this.props.products.map((product, index) => (<tr><td>{product.name}</td><td>{product.price}</td></tr>));
    this.props.products.forEach((product) => {
      if(iteratedCategories.indexOf(product.category) === -1){
        iteratedCategories.push(product.category);
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        );
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
              <th>Name</th>
              <th>Price</th>
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
