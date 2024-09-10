// import "./cart.css";
// import Nav from "../Nav bar/Nav";
// import Footer from "../footer section/footer";
// import Box from "../box product/box";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import Carditem from "../card item/carditem";

// function Cart() {
//   const [myCarts, setMyCarts] = useState(JSON.parse(localStorage.getItem("cart")) || [])
//   // delete function
//   const deleteCard = (id) => {
//     // Filter out the item with the specified id
//     const updatedCarts = myCarts.filter(i => i.id !== id);
//     setMyCarts(updatedCarts);
//   };

//   useEffect(() => {
//     // Update stoarge when data change
//     localStorage.setItem("cart", JSON.stringify(myCarts));
//   }, [myCarts]);

//   //count buttons of product
//   const [value , setvalue] = useState(1)

//   const [total , setTotal] = useState("")

//   const plus =(p)=>{
//     setvalue(value + 1)
// // total part
//     setTotal(p + p )
//   }
//   const mins =()=>{
//     setvalue(value - 1)

//     if (value === 0) {
//       setvalue(0)
      
//     }
    
//   }



//   return (
//     <div className="cartt">
      
//       <div className="cartsection">
//         <div className="conut">
//           <h1>
//             <span></span>Items in your cart
//           </h1>
//           <p>
//             all the items aded into the basket or cart is listed out here! you
//             can add more items or remove the one youre not conortable with
//           </p>
//         </div>

//         <div className="items0">
//           <h1>ITEMS</h1>
//           <div className="last3">
//             <h1>QUANTITY</h1>
//             <h1>UNIT(PRICE)</h1>
//             <h1>Total</h1>
//           </div>

//           <div className="boxes">
//           {myCarts.map((e)=>(
//             <Carditem
//             key={e.id}
//             src={e.image}
//             cat={e.category}
//             title={e.title}
//             price={e.price}
//             deletCardd={()=>{deleteCard(e.id)}}
//             pbtn={()=>{plus(e.price)}}
//             mbtn={mins}
//             QUANTITY={value}
//             Total={total}
//             />
//           ))}
//           </div>
       
      
//         </div>
//         <div className="check">
//           <h1>Total Amount :</h1>
//           <span>$322</span>
//           <p>Delivery fee is not included</p>
//           <Link to="/home"> <button>Continue Shopping</button></Link>
//           <button>Proceed to Checkout</button>
            
//             </div>
//             <Footer />

//       </div>

//     </div>
    
//   );
// }

// export default Cart;



import "./cart.css";
import Nav from "../Nav bar/Nav";
import Footer from "../footer section/footer";
import Box from "../box product/box";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carditem from "../card item/carditem";

function Cart() {
  // Initialize the cart items from localStorage or an empty array
  const [myCarts, setMyCarts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  // Function to delete a cart item by id
  const deleteCard = (id) => {
    const updatedCarts = myCarts.filter(i => i.id !== id);
    setMyCarts(updatedCarts);
  };

  useEffect(() => {
    // Update localStorage whenever cart data changes
    localStorage.setItem("cart", JSON.stringify(myCarts));
  }, [myCarts]);

  // Function to handle quantity change
  const updateQuantity = (id, change) => {
    setMyCarts(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max((item.quantity || 1) + change, 1),
              totalPrice: ((item.price || 0) + (change > 0 ? 2 : 0)) * ((item.quantity || 1) + change)
            }
          : item
      )
    );
  };

  return (
    <div className="cartt">
      <div className="cartsection">
        <div className="conut">
          <h1>Items in your cart</h1>
          <p>All the items added to the basket or cart are listed here! You can add more items or remove the ones you're not comfortable with.</p>
        </div>

        <div className="items0">
          <h1>ITEMS</h1>
          <div className="last3">
            <h1>QUANTITY</h1>
            <h1>UNIT(PRICE)</h1>
            <h1>TOTAL</h1>
          </div>

          <div className="boxes">
            {myCarts.map(e => (
              <Carditem
                key={e.id}
                src={e.image}
                cat={e.category}
                title={e.title}
                price={e.price}
                deletCardd={() => deleteCard(e.id)}
                pbtn={() => updateQuantity(e.id, 1)}
                mbtn={() => updateQuantity(e.id, -1)}
                QUANTITY={e.quantity || 1}
                Total={ e.totalPrice || e.price}
              />
            ))}
          </div>
        </div>

        <div className="check">
          <h1>Total Amount:</h1>
          <span>
            $
            {myCarts.reduce((acc, item) => acc + (item.totalPrice || item.price), 0)}
          </span>
          <p>Delivery fee is not included</p>
          <Link to="/home"> <button id="shopingg">Continue Shopping</button></Link>
          <Link to="/check"> <button>Proceed to Checkout</button></Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
