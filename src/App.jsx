import './App.css';
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import Home from './Home page/home';
import Market from './market store/market';
import Contact from './contact page/contact';
import Shop from './shop/shop'; 
import About from './about us/about';
import Sign from './sign up/sign';
import Login from './slogin/login';
import Product from './Product destails/product';
import Cart from './cart/cart';
import Errorr from './error/error';
import Nav from './Nav bar/Nav';
import Footer from './footer section/footer';
import Check from './checkout/check';
import { Repo } from './data/data';
function App() {


  return (
    <div className="App">
      <Repo>
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Errorr/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/Market' element={<Market/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/check' element={<Check/>}/>
      <Route path='/product' element={<Product/>}/>
     </Routes>

     </BrowserRouter>
     </Repo>

     

    </div>
  );
}

export default App;
