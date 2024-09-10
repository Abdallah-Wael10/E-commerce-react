import "./product.css";
import Box from "../box product/box";
import Nav from "../Nav bar/Nav";
import Footer from "../footer section/footer";
import man1 from "../shop/mens/man1.jpeg";
import man2 from "../shop/mens/man2.jpeg";
import man3 from "../shop/mens/man3.jpeg";
import man4 from "../shop/mens/man4.jpeg";
import man5 from "../shop/mens/man5.jpeg";
import v1 from "./images/v.png";
import face from "./images/face.png";
import insta from "./images/insta.png";
import twitter from "./images/twitter.png";
import img1 from "../market store/images/images2.jpeg";

// 

import React, { useContext } from "react";
import { Store } from "../data/data.jsx";

// import uses
import { useState } from "react";
import { useEffect } from "react";

function Product() {
  // arrays
  //  use state to do addtocart count and else
  const [cartCount, setCartCount] = useState();
  // to get data from api
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
// get data from stoarge
 const  product = JSON.parse(localStorage.getItem("product")) || [];
// let data go to array with props = prod its data of product and will let it go to array
 const prodViewPage = (prod)=>{
// let productview = prod as array
  const productView = [prod];
//set it in storage
  localStorage.setItem("product" , JSON.stringify(productView))
// let page reload when i click on any product
  window.location.reload();

 }




  return (
    
    <div className="product">
            <p id="ppp">{cartCount}</p>
{product.map((e)=>(
      <h1>Home-shop- {e.title}</h1>
    ))}

      <div className="productsection">
      {product.map((e)=>(

        <header>
          <img src={e.image} alt="" />
          <div className="text0">
            <h1>
            {e.title}
            </h1>
            <h2>{e.category}</h2>
            <hr />
            <span>${e.price}</span>
            <del>$1000</del>
            <p>+ shipping from ₦ 1.41 to LEKKI-AJAH (SANGOTEDO)</p>
            <button onClick={()=>{addToCart(e)}}>
              <img src={v1} />
              Add to cart
            </button>
          </div>
          <div className="imgs">
            <img src={man2} />
            <img src={man3} />
            <img src={man4} />
            <img src={man5} />
          </div>
          <div className="media">
            <h1>SHARE PRODUCT :</h1>
            <div className="iconsss">
              <img src={face} />
              <img src={insta} />
              <img src={twitter} />
            </div>
          </div>
        </header>
        ))}

        <main>
          <img src={img1} />
          <div className="text1">
            <h1>Product details</h1>
            {product.map((e)=>(<h2>{e.title}</h2> ))}
            <p>
              Innovative tread compound <br /> <br />
              Two-ply carcass <br />
              Resolute and precise performance The Michelin Latitude Sport 3 is
              a 4x4 tyre designed with a continuous central rib through the
              tyre's tread pattern. <br /> <br />
              This helps to ensure a high torque transfer when both braking and
              accelerating - helping to deliver a smooth and reliable
              performance. <br /> <br />
              The tyre features a two-ply carcass to tackle the robust
              challenges encountered by a 4x4 driver. <br /> <br />
              The Latitude Sport's tread compound has been created from an
              innovative mix of silica and the latest in elastomer technology -
              providing you with extra mileage without any compromise on fuel
              efficiency. <br /> <br />
              The Michelin Latitude Sport 3 ultra-high performance summer tire
              is built to offer more spirited drivers the kind of traction,
              handling and cornering performance you look for in a UHP model.
              Designed to fit a wide range of SUV’s and crossover vehicles,
              Michelin has produced a tire that doesn’t disappoint for the most
              part. <br /> <br />
              With a new asymmetric tread design and unique tread compound, the
              Latitude Sport 3 aims to improve on the capabilities of the
              original Latitude Sport tire, which is an excellent tire in its
              own right. However, Michelin has bumped up the traction, braking
              and cornering grip on this latest model. It’s one reason why
              you’ll find it as OE on vehicles like the Porsche Macan S. <br />{" "}
              <br />
              Thanks to the varied thickness of this tires siping, there is a
              reduction in rolling resistance. <br /> <br />
              It’s tread design and three wide circumferential grooves provides
              exceptional wet traction and reduces the risk of hydroplaning.{" "}
              <br /> We’ve heard drivers state that this tire handles wet road
              surfaces as well as many competitor tires do on dry pavement.{" "}
              <br />
              Michelin offers 17 to 21-inch sizes, with speed ratings of V, W
              and Y available. A 20K mile treadwear warranty is also included on
              all sizes. <br /> <br />
              Pros Excellent dry and wet grip, traction and braking <br />{" "}
              <br />
              Cornering grip and stability is outstanding <br /> <br />
              Road feedback
            </p>
            <video src=""></video>
          </div>
          <div className="text2">
            <h1>Product Specifications</h1>
            <h2>
              SKU: <span>MI334VP1H39OANAFAMZ</span>
            </h2>
            <h2>
              Color: <span>BLACK</span>
            </h2>
            <h2>
              Main Material: <span>Natural Rubber</span>
            </h2>
            <h2>
              Model: <span> Michelin LATITUDE SPORT 3</span>
            </h2>
            <h2>
              Production Country: <span>France</span>
            </h2>
            <h2>
              Product Line: <span> MICHELIN NIG OFFICIAL</span>
            </h2>
            <h2>
              Size (L x W x H cm): <span> 235 x 55 x 19</span>
            </h2>
            <h2>
              Weight (kg): <span>13.7</span>
            </h2>
            <h2>
              Website: <span>https://mysite.com</span>
            </h2>
          </div>
        </main>
      </div>
      <div className="lastseen1">
        <h1>Last seen</h1>
        <div className="continar10">
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
      </div>
      <div className="lastseen1">
        <h1>You may also like This</h1>
        <div className="continar10">
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
        <div className="adv00">
          <img src={img1} alt="" />
        </div>
        <div className="lastseen2">
          <h1>More items from this seller</h1>
          <div className="continar100">
          {data.slice(10, 20).map((e) => (
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
          <div className="adv000">
            <img src={img1} alt="" />
          </div>
        </div> 
      </div>
      <Footer />
    </div>
  );
}

export default Product;
