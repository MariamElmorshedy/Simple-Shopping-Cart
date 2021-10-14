import React,{Component}from 'react';
import {Link} from 'react-router-dom';
class Product  extends Component {
    // state = {
    //     name: this.props.product.name,
    //     count: this.props.product.count
    // }
    getClasses(){
        return this.props.product.count === 0? "badge bg-warning m-2":"bagde bg-primary m-2";
    }
    
    
    render() { 
        return (
            <div className = "row">
                <div className = "col-2"><span>
                    <Link to= {`/products/${this.props.product.id}`}>{this.props.product.name}</Link>
                     </span></div>
                <div className = "col-1">
                    <span className = {this.getClasses()}>{this.props.product.count}</span>
                    <button onClick = { () =>this.props.increment(this.props.product)}className = "btn btn-primary">+</button>
                <span  style={{cursor:'pointer'}} onClick = {() => this.props.onDelete(this.props.product)}><i className="fas fa-trash m-2"></i></span>
                </div>
                
                
            </div>
        );
    }
}
 
export default Product ;
