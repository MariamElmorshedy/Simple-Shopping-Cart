import React, { Component } from "react";
import NavBar from "./navbar";
import ShoppingCart from "./shoppingcart";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import ProductDetails from "./productDetails";
import NotFound from "./notFound";
import Menu from "./menu";
import Login from "./login";
import axios from "axios";
import Admin from "./admin";
import ProductForm from "./ProductForm";
import { toast, ToastContainer } from "react-toastify";
class App extends Component {
  state = {
    products:[],
  };
  async componentDidMount(){
    const {data} =  await axios.get('http://localhost:3000/products/');
    this.setState({products:data});

  }
  DeleteHandler = async(product) => {
    const oldproducts = [...this.state.products];
     let products = this.state.products.filter((p) => p.id !== product.id);
     this.setState({ products});
     try{
      await axios.delete('http://localhost:3000/products/'+ product.id)

     }catch(ex){
       toast.error("can't delete");
       this.setState({products:oldproducts});
     }
  };
  onReset = () => {
    let products = [...this.state.products];
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState(products);
  };
  incrementHandler = (product) => {
    let products = [...this.state.products];
    let index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].count++;
    this.setState({ products });
  };
  Selected = (product) => {
      //clone
    let products = [...this.state.products];
    let index = products.indexOf(product);
    products[index] = { ...products[index] };
    //edit
    products[index].isInCart = !products[index].isInCart;
    console.log('donnnne');
    //set state
    this.setState({ products });
  };
  render() {
    return (
      
      <React.Fragment>
        <ToastContainer/>
        <NavBar
          productCount={this.state.products.filter((p) => p.count > 0).length}
        />
        <main className="container">
          <Switch>
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products.filter(pro => pro.isInCart === true)}
                  onDelete={this.DeleteHandler}
                  increment={this.incrementHandler}
                  onReset={this.onReset}
                  {...props}
                />
              )}
            />
            <Route path='/login' component = {Login}/>
            <Route
              path="/products/:id/:name?"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />
             <Route path = '/admin' render ={(props) =>(
             <Admin 
             products = {this.state.products}{...props}
             onDelete = {this.DeleteHandler}
             />) }/>
             <Route path='/productform/:id' component ={ProductForm}/>

            {/* <Route path="/about" component={About} /> */}
            {/* <Route path="/contact" component={Contact} /> */}
            {/* <Route
              path="/home"
              component = {Home}
            /> */}
            <Route path = '/Menu' render = {(props) =>( <Menu products = {this.state.products}{...props} onClick = {this.Selected}/>)}/>
            {/* <Route path="/notFound" component={NotFound} /> */}
{/*            
            <Redirect to="/notFound" /> */}
          </Switch>
          {/* <ShoppingCart products = {this.state.products}
                 onDelete = {this.DeleteHandler}
                  increment = {this.incrementHandler}
                  onReset = {this.onReset}/> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
