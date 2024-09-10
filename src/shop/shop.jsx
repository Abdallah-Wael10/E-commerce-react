import "../shop/shop.css"
import Box from "../box product/box.jsx";
import Nav from "../Nav bar/Nav.jsx";
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../footer section/footer.jsx';
//imgs
import coloum1 from "./images/coloum1.png"
// import imgs to women
import women1 from "./women/women1.jpeg"
import women2 from "./women/women2.jpeg"
import women3 from "./women/women3.jpeg"
import women4 from "./women/women4.jpeg"
import women5 from "./women/women5.jpeg"
import women6 from "./women/women6.jpeg"
import women7 from "./women/women7.jpeg"
import women8 from "./women/women8.jpeg"
import women10 from "./women/women10.jpeg"
import women11 from "./women/women11.jpeg"
import women12 from "./women/women12.jpeg"
// import imgs to men
import man1 from "./mens/man1.jpeg"
import man2 from "./mens/man2.jpeg"
import man3 from "./mens/man3.jpeg"
import man4 from "./mens/man4.jpeg"
import man5 from "./mens/man5.jpeg"
import man6 from "./mens/man6.jpeg"
import man7 from "./mens/man7.jpeg"
import man8 from "./mens/man8.jpeg"
import man9 from "./mens/man9.jpeg"
import man10 from "./mens/man10.jpeg"
// import imgs to kids
import kid1 from "./kids/kid1.jpeg"
import kid2 from "./kids/kid2.jpeg"
import kid3 from "./kids/kid3.jpeg"
import kid4 from "./kids/kid4.jpeg"
import kid5 from "./kids/kid5.jpeg"
import kid6 from "./kids/kid6.jpeg"
import kid7 from "./kids/kid7.jpeg"
import kid8 from "./kids/kid8.jpeg"
import kid9 from "./kids/kid9.jpeg"
import kid10 from "./kids/kid10.jpeg"



function Shop() {

  //  use state to do addtocart count and else
  const [data, setData] = useState([]);
  const [cartCount, setCartCount] = useState();
  // use effect to get the api when web is load
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
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

// its array for top sells its like api
const ALl =[
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man1  },
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women6},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man4  },
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women3},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man1  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man2  },
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women8},
    {"id": "2", "brand": "Outfit kids", "model": "Kids", "price": "$77","image_url" : kid2 },
    {"id": "3", "brand": "Outfit kids", "model": "Kids", "price": "$500","image_url" : kid3 },
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women6},
    {"id": "5", "brand": "Outfit kids", "model": "Kids", "price": "$343","image_url" : kid5 },
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women3},
    {"id": "7", "brand": "Outfit kids", "model": "Kids", "price": "$212","image_url" : kid8 },
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid7},
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women4},
    {"id": "6", "brand": "Outfit kids", "model": "Kids", "price": "$699","image_url" : kid6 },
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women1},
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid7},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man6  },
    {"id": "6", "brand": "Outfit kids", "model": "Kids", "price": "$699","image_url" : kid6 },
    {"id": "7", "brand": "Outfit kids", "model": "Kids", "price": "$212","image_url" : kid8 },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man4  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man5  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man6  },
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women1},
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
    {"id": "3", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women3},
    {"id": "4", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women4},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man7  },
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women4},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man9  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man10  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man5  },
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man7  },
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid1},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man9  },
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women1},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man5  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man6  },
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man8  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man9  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man10  },
    {"id": "16", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women4},
    {"id": "17", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women5},
    {"id": "18", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women6},
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
    {"id": "20", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women8},
    {"id": "21", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women10},
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
    {"id": "23", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
    {"id": "24", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women8},
    {"id": "25", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women10},
    {"id": "26", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women11},
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid2},
    {"id": "28", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women8},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man5  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man6  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : kid5  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man8  },
    {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women1},
    {"id": "2", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women2},
    {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid8},
    {"id": "4", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women4},
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man9  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man10  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man10  },




]
const Mens =[

    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man1  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man2  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man3  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man4  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man5  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man1  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man2  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man3  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man4  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man5  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man6  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man7  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man8  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man9  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man10  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man5  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man6  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man7  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man8  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man9  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man10  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man5  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man6  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man7  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man8  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man9  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man10  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man5  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man6  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man7  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man8  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man9  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man10  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man10  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man5  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man6  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man7  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man8  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man9  },
    {"id": "1", "brand": "men Outfit", "model": "Man", "price": "$499",  "image_url" : man10  },




]

    // its array for DAily deal its like api

    const Women =[

        {"id": "1", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women1},
        {"id": "2", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women2},
        {"id": "3", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women3},
        {"id": "4", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women4},
        {"id": "5", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women5},
        {"id": "6", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women6},
        {"id": "7", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women7},
        {"id": "8", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women8},
        {"id": "9", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women10},
        {"id": "10", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women1},
        {"id": "11", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women2},
        {"id": "12", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women3},
        {"id": "13", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women4},
        {"id": "14", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women11},
        {"id": "15", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "16", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women4},
        {"id": "17", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women5},
        {"id": "18", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women6},
        {"id": "19", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women7},
        {"id": "20", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women8},
        {"id": "21", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women10},
        {"id": "22", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women11},
        {"id": "23", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "24", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women8},
        {"id": "25", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women10},
        {"id": "26", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women11},
        {"id": "27", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "28", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women8},
        {"id": "29", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women10},
        {"id": "30", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women11},
        {"id": "31", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "32", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "33", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "34", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "35", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "36", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "37", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "38", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "39", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
        {"id": "40", "brand": "fashion", "model": "Laptop", "price": "$699", "image_url" : women12},
  
    ]
    const Kids =[

        {"id": "1", "brand": "Outfit kids", "model": "Kids", "price": "$699", "image_url" : kid1 },
        {"id": "2", "brand": "Outfit kids", "model": "Kids", "price": "$77","image_url" : kid2 },
        {"id": "3", "brand": "Outfit kids", "model": "Kids", "price": "$500","image_url" : kid3 },
        {"id": "4", "brand": "Outfit kids", "model": "Kids", "price": "$699","image_url" : kid4 },
        {"id": "5", "brand": "Outfit kids", "model": "Kids", "price": "$343","image_url" : kid5 },
        {"id": "6", "brand": "Outfit kids", "model": "Kids", "price": "$699","image_url" : kid6 },
        {"id": "7", "brand": "Outfit kids", "model": "Kids", "price": "$212","image_url" : kid8 },
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid7},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
        {"id": "6", "brand": "Outfit kids", "model": "Kids", "price": "$699","image_url" : kid6 },
        {"id": "7", "brand": "Outfit kids", "model": "Kids", "price": "$212","image_url" : kid8 },
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid7},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
        {"id": "6", "brand": "Outfit kids", "model": "Kids", "price": "$699","image_url" : kid6 },
        {"id": "7", "brand": "Outfit kids", "model": "Kids", "price": "$212","image_url" : kid8 },
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid7},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
        {"id": "6", "brand": "Outfit kids", "model": "Kids", "price": "$699","image_url" : kid6 },
        {"id": "7", "brand": "Outfit kids", "model": "Kids", "price": "$212","image_url" : kid8 },
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid7},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
        {"id": "6", "brand": "Outfit kids", "model": "Kids", "price": "$699","image_url" : kid6 },
        {"id": "7", "brand": "Outfit kids", "model": "Kids", "price": "$212","image_url" : kid8 },
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid7},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid7},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
        {"id": "6", "brand": "Outfit kids", "model": "Kids", "price": "$699","image_url" : kid6 },
        {"id": "7", "brand": "Outfit kids", "model": "Kids", "price": "$212","image_url" : kid8 },
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid7},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
        {"id": "6", "brand": "Outfit kids", "model": "Kids", "price": "$699","image_url" : kid6 },
        {"id": "7", "brand": "Outfit kids", "model": "Kids", "price": "$212","image_url" : kid8 },
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid9},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid7},
        {"id": "8", "brand": "Outfit kids", "model": "Kids", "price": "$99", "image_url" : kid10},
   
    ]
    function styleinject(cssText) {
        let head = document.head
        let style = document.createElement("style")
        style.appendChild(document.createTextNode(cssText))
        head.appendChild(style)

    }
// you on top sells and will go to fashion
    const [New, setCurrentArray] = useState(ALl);
    const SwitchArray = () => {
      setCurrentArray(New === ALl ? Mens: Mens );
        styleinject(`
        .advs{
       position: relative;
        top: -3205px;
        width: 289px;
        left: 18px;
        height: 5000px;
        display: flex;
        flex-wrap: wrap;
        gap: 46px;
        }
        .shop>.footer {
            position: relative;
            top: -3803px;
        }
        `)
    };
    //you on fashion and will go top sells

    const [setCurrentArray1] = useState(ALl);
    const SwitchArray1 = () => {
      setCurrentArray(New === ALl ? Women: Women );
    };
// you will go to kids

 const [ setCurrentArray3] = useState(ALl);
 const SwitchArray3 =()=>{
    setCurrentArray(New ===ALl ? Kids: Kids )

 }
 const [setCurrentArray4] = useState(ALl);
 const SwitchArray4 =()=>{
    setCurrentArray(New ===ALl ? ALl: ALl )

    styleinject(`
    .advs{
        position: relative;
        top: -5905px;
        width: 289px;
        left: 18px;
        height: 5000px;
        display: flex;
        flex-wrap: wrap;
        gap: 46px;
    }

.shop>.footer{
    position: relative;
    top: -5865px;
}
    `)

 }


    return (
      <div className="shop">
              <p id="ppp">{cartCount}</p>

        <h1 id='hh1'>Home -shop- Fashion</h1>
<aside className='aside1'>
    <button onClick={SwitchArray}>Mens</button>
    <button onClick={SwitchArray1}>Women</button>
    <button onClick={SwitchArray3}>Kids</button>
    <button onClick={SwitchArray4}>All</button>
</aside>




<div className="continarrr">
{/* to get data from api or array */}
{New.map((e)=>(

<Box

image_url={e.image_url}
price={e.price}
brand={e.brand}
disc="$1000"
model={e.model}
onaddtocart={() => addToCart(e.id)}

/>


))}
</div>
<div className="advs">
    <img src={coloum1} />
    <img src={coloum1} />
    <img src={coloum1} />
    <img src={coloum1} />
    <img src={coloum1} />
    <img src={coloum1} />
    <img src={coloum1} />
    <img src={coloum1} />
</div>

<Footer/>
</div>
    );
  }
  
  export default Shop;