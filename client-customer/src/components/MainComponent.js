import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Menu from './MenuComponent';
import Inform from './InformComponent';
import Home from './HomeComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailComponent';
import Signup from './SignupComponent';
import Active from './ActiveComponent'; 
import Login from './LoginComponent';
import Myprofile from './MyprofileComponent';
import Mycart from './MycartComponent'; // Import MycartComponent
import Myorders from './MyordersComponent'; // Import MyordersComponent
import Gmap from './GmapComponent'; // Import GmapComponent
import TawkMessenger from './TawkMessengerComponent';

class Main extends Component {
  render() {
    return (
      <div className="body-customer">
        <Menu />
        <Inform />
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/category/:cid' element={<Product />} />
          <Route path='/product/search/:keyword' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/active' element={<Active />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/myprofile' element={<Myprofile />} />
          <Route path='/mycart' element={<Mycart />} /> {/* Added route for Mycart */}
          <Route path='/myorders' element={<Myorders />} /> {/* Added route for Myorders */}
          <Route path='/gmap' element={<Gmap />} /> {/* Added route for Gmap */}
        </Routes>
        <TawkMessenger /> 
      </div>
    );
  }
}

export default Main;
