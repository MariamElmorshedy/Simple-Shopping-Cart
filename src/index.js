import React from 'react';
import reactDom from 'react-dom';
// import Product from './product';
// import ShoppingCart from './Components/shoppingcart';
import App from './Components/app';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/react-toastify/dist/ReactToastify.css';
reactDom.render(<BrowserRouter>
<App/>
</BrowserRouter>
    ,document.querySelector("#root"));
