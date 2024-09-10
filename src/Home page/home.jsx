import "../Home page/home.css";
import { Link } from "react-router-dom";
import Footer from "../footer section/footer.jsx";
// import images
import tishrt from "../Home page/images/la_tshirt.png";
import chair from "../Home page/images/ic_outline-chair.png";
import boyg from "./images/boyg.png";
import flash from "./images/flashdeal.jpeg";
import adv from "./images/adv2.jpeg";
import img from "../Nav bar/images/googleAdv.png";
import promo from "./images/promo.jpeg";
import promo2 from "./images/promo2.jpeg";
import iphone1 from "./images/iphone.jpeg";
import iphone2 from "./images/iphone2.jpeg";
import sams from "./images/sams.jpeg";
import sams2 from "./images/sams2.jpeg";
import Box from "../box product/box.jsx";
import React, { useContext } from "react";
import { Store } from "../data/data.jsx";
// import use state
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  // //  use state to do addtocart count and else
  const [cartCount, setCartCount] = useState();
// get data from api compnant
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
 // the props have all data of product get it with map function
  const prodViewPage =(prod)=>{
    // this empty array hold the product 
    const productView = [prod];

    // set cart into storage after let it string
    localStorage.setItem("product", JSON.stringify(productView));

  }
  return (
    <div className="Home">
      
      <p id="ppp">{cartCount}</p>
      {/* aside part */}
      <aside>
        <Link to="/shop">
          <button id="btn1">
            <img src={tishrt} />
            Fashion
          </button>
        </Link>
        <button>
          <img src={chair} />
          Furniture
        </button>
        <button>Electronic</button>
        <button>Cookers</button>
        <button>Electrical</button>
        <button>Car</button>
        <button>Package</button>
        <button>Agric</button>
        <button>E-Book</button>
        <button>Ironmongery</button>
        <button>Sport & Gym</button>
        <button>Bike & Bicycle</button>
        <button id="btn2">Others</button>
      </aside>
      {/* header part */}
      <header>
        <h1>Buy Quality & Save Money </h1>
        <h3>at the same time to enjoy your shopping</h3>
        <img src={boyg} />
      </header>
      <div className="salescode">
        <div>
          <img src={flash} alt="" />
        </div>
        <div>
          <img src={promo} alt="" />
        </div>
        <div>
          <img src={promo2} alt="" />
        </div>
      </div>
      <div className="salescode2">
        <div className="addv1">
          <img src={iphone1} />
        </div>
        <div className="addv1">
          <img src={iphone2} />
        </div>
        <div className="addv1">
          <img src={sams} />
        </div>
        <div className="addv1">
          <img src={sams2} />
        </div>
        {/* sec 2 */}
        <section id="secc2">
          <h1>
            Top selling <span>See more</span>
          </h1>
          <div className="continarr">
            {/* to get data from api or array */}
            {data.slice(0, 5).map((e) => (
              <Box
              
                key={e.id}
                prodView={()=> prodViewPage(e)}
                image_url={e.image}
                price={e.price}
                brand={e.category}
                disc="$1000"
                model={e.title}
                onaddtocart={() => addToCart(e)}
              />
            ))}
          </div>
        </section>
        {/* sec 3 */}
        <section id="secc3">
          <h1>
            Daily Deal <span>See more</span>
          </h1>
          <div className="continarr">
            {/* to get data from api  */}
            {data.slice(5, 10).map((e) => (
              <Box
                key={e.id}
                prodView={()=> prodViewPage(e)}
                image_url={e.image}
                price={e.price}
                brand={e.category}
                disc="$1000"
                model={e.title}
                onaddtocart={() => addToCart(e)}
              />
            ))}
          </div>
        </section>
        {/* sec 4 Top shops */}
        <section id="secc4">
          <h1>
            Top Shops <span>Visit Shop</span>
          </h1>
          <img id="addv1" src={adv} alt="" />
          <div className="continarr">
            {/* to get data from api  */}
            {data.slice(0, 5).map((e) => (
              <Box
                key={e.id}
                prodView={()=> prodViewPage(e)}
                image_url={e.image}
                price={e.price}
                brand={e.category}
                disc="$1000"
                model={e.title}
                onaddtocart={() => addToCart(e)}
              />
            ))}
          </div>
        </section>

        {/* sec5 */}
        <section id="secc5">
          <h1>
            General Products <span>Visit Shop</span>
          </h1>

          <div className="continarr">
            {/* to get data */}
            {/* to get data from api or array */}
            {data.slice(0, 15).map((e) => (
              <Box
                key={e.id}
                prodView={()=> prodViewPage(e)}
                image_url={e.image}
                price={e.price}
                brand={e.category}
                disc="$1000"
                model={e.title}
                onaddtocart={() => addToCart(e)}
              />
            ))}
          </div>
          {/* adv image */}
          <img id="addv1" src={adv} alt="" />
        </section>
        {/* sec6 */}
        <section id="secc6">
          <h1>
            Last seen<span>Visit Shop</span>
          </h1>

          <div className="continarr">
            {/* to get data */}
            {/* to get data from api or array */}
            {data.slice(15, 20).map((e) => (
              <Box
                key={e.id}
                prodView={()=> prodViewPage(e)}
                image_url={e.image}
                price={e.price}
                brand={e.category}
                disc="$1000"
                model={e.title}
                onaddtocart={() => addToCart(e)}
              />
            ))}
          </div>
          {/* adv img */}
          <img id="addv2" src={img} alt="" />
        </section>
        {/* sec7 */}
        <section id="secc7">
          <h1>Top Checked product</h1>

          <div className="continarr">
            {/* to get dara */}
            {/* to get data from api or array */}
            {data.slice(3, 8).map((e) => (
              <Box
                key={e.id}
                prodView={()=> prodViewPage(e)}
                image_url={e.image}
                price={e.price}
                brand={e.category}
                disc="$1000"
                model={e.title}
                onaddtocart={() => addToCart(e)}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
