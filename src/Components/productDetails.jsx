import React, { Component } from 'react';
import qs from 'query-string';
class productDetails extends React.Component {
    handelClick = () =>{
        this.props.history.push('/cart');
    }
    render() { 
        
        const res  = qs.parse(this.props.location.search);
        console.log(res);
        const product= this.props.products.filter( c => c.id === parseInt(this.props.match.params.id))[0];
        return(
            <React.Fragment>
    <h1>Productno.{this.props.match.params.id}</h1>
    <h2>{product.name}</h2>
    <h2>Count in Shopping cart :{product.count}</h2>
    <button onClick={this.handelClick} className="btn btn-primary btn-sm">Save</button>
    
    </React.Fragment>
           
        );
    }
}
 
 
export default productDetails;