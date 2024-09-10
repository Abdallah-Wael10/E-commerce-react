import "../market store/market.css";
import Footer from "../footer section/footer";
import Box from "../box product/box";
import { useState } from "react";
import { useEffect } from "react";
import adv from "../Home page/images/adv4.png";
import img1 from "./images/images.png";
import img2 from "./images/images2.jpeg";
import { Store } from "../data/data";
import React, { useContext } from "react";


function Market() {
  const [cartCount, setCartCount] = useState();
// get data from api componant
  const data =useContext(Store)
  // function of add to cart
  const addToCart = (productItem) => {
    // let my cart the empty array let the inner of it be from string to object
    const myCart = JSON.parse(localStorage.getItem("cart")) || [];
    //push the props to array
    myCart.push(productItem);
    // set cart into storage after let it string
    localStorage.setItem("cart", JSON.stringify(myCart));
    // to make  cart count
    setCartCount(myCart.length);
    localStorage.setItem("length", cartCount);
    
  };

  const prodViewPage =(prod)=>{
    // this empty array hold the product 
    const productView = [prod];

    // set cart into storage after let it string
    localStorage.setItem("product", JSON.stringify(productView));
  }
  return (
    <div className="market">
      <p id="ppp">{cartCount}</p>
      <section id="sec1">
        <h1>Visit Shop</h1>
        <a href="http://">
          <img id="adv222" src={img1} alt="" />
        </a>
        <div className="continar">
          {/* to get data from api or array */}
          {data.slice(0, 5).map((e) => (
            <Box
              key={e.id}
              image_url={e.image}
              prodView={()=> prodViewPage(e)}
              price={e.price}
              brand={e.category}
              disc="$1000"
              model={e.title}
              onaddtocart={() => addToCart(e)}
              />
          ))}
        </div>
      </section>
      <section id="sec2">
        <h1>Visit Shop</h1>
        <a href="http://">
          <img id="adv22" src={img2} alt="" />
        </a>
        <div className="continar">
          {/* to get data from api or array */}
          {data.slice(5, 10).map((e) => (
            <Box
              key={e.id}
              image_url={e.image}
              prodView={()=> prodViewPage(e)}
              price={e.price}
              brand={e.category}
              disc="$1000"
              model={e.title}
              onaddtocart={() => addToCart(e)}
              />
          ))}
        </div>
      </section>
      <section id="sec3">
        <h1>Visit Shop</h1>
          <img id="adv2" src={img1} alt="" />
        <div className="continar">
          {/* to get data from api or array */}
          {data.slice(10, 15).map((e) => (
            <Box
              key={e.id}
              image_url={e.image}
              prodView={()=> prodViewPage(e)}
              price={e.price}
              brand={e.category}
              disc="$1000"
              model={e.title}
              onaddtocart={() => addToCart(e)}
              />
          ))}
        </div>
      </section>
      <section id="sec4">
        <h1>Visit Shop</h1>
        <a href="http://">
          <img id="advvv12" src={img2} alt="" />
        </a>
        <div className="continar">
          {/* to get data from api or array */}
          {data.slice(15, 20).map((e) => (
            <Box
              key={e.id}
              image_url={e.image}
              prodView={()=> prodViewPage(e)}
              price={e.price}
              brand={e.category}
              disc="$1000"
              model={e.title}
              onaddtocart={() => addToCart(e)}
              />
          ))}
        </div>
      </section>
      <section id="sec5">
        <h1>Visit Shop</h1>
          <img id="adv2" src={img1} alt="" />
        <div className="continar">
          {/* to get data from api or array */}
          {data.slice(0, 5).map((e) => (
            <Box
              key={e.id}
              image_url={e.image}
              prodView={()=> prodViewPage(e)}
              price={e.price}
              brand={e.category}
              disc="$1000"
              model={e.title}
              onaddtocart={() => addToCart(e)}
              />
          ))}
        </div>
      </section>
      <section id="sec6">
        <h1>Visit Shop</h1>
        <a href="http://">
          <img id="advvv1" src={img2} alt="" />
        </a>
        <div className="continar">
          {/* to get data from api or array */}
          {data.slice(5, 10).map((e) => (
            <Box
              key={e.id}
              image_url={e.image}
              prodView={()=> prodViewPage(e)}
              price={e.price}
              brand={e.category}
              disc="$1000"
              model={e.title}
              onaddtocart={() => addToCart(e)}
              />
          ))}
        </div>
      </section>
      <section id="sec7">
        <h1>Visit Shop</h1>
          <img id="advv22" src={img1} alt="" />
        <div className="continar">
          {/* to get data from api or array */}
          {data.slice(15, 20).map((e) => (
            <Box
              key={e.id}
              image_url={e.image}
              prodView={()=> prodViewPage(e)}
              price={e.price}
              brand={e.category}
              disc="$1000"
              model={e.title}
              onaddtocart={() => addToCart(e)}
              />
          ))}
        </div>
      </section>
      <section id="sec8">
        <h1>Visit Shop</h1>
        <a href="http://">
          <img id="adv1" src={img2} alt="" />
        </a>
        <div className="continar">
          {/* to get data from api  */}
          {data.slice(0, 5).map((e) => (
            <Box
              key={e.id}
              image_url={e.image}
              prodView={()=> prodViewPage(e)}
              price={e.price}
              brand={e.category}
              disc="$1000"
              model={e.title}
              onaddtocart={() => addToCart(e)}
              />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Market;
