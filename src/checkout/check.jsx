// // import './check.css';

// // import Nav from '../Nav bar/Nav';
// // import Footer from '../footer section/footer';
// // import { Link } from 'react-router-dom';
// // import Carditem from '../card item/carditem';
// // import { useState } from 'react';
// // import { useEffect } from 'react';



// function Check() {
//   const [myCarts , setMyCart] =useState(JSON.parse(localStorage.getItem("cart")) || [] )

// //  const deleteCard =(id)=>{
// //   const updatedCarts = myCarts.filter(i => i.id !== id)
// //   setMyCart(updatedCarts)
// //  }


// // useEffect(()=>{
// //   localStorage.setItem("cart" ,JSON.stringify(myCarts))
// // }, [myCarts])
  
//   // Function to delete a cart item by id
//   const deleteCard = (id) => {
//     const updatedCarts = myCarts.filter(i => i.id !== id);
//     setMyCart(updatedCarts);
//   };

//   useEffect(() => {
//     // Update localStorage whenever cart data changes
//     localStorage.setItem("cart", JSON.stringify(myCarts));
//   }, [myCarts]);

//   const [value ,setValue] = useState(1)
// const [price2 ,setprice2] =useState()

//     const plusbtn =(p)=>{
//     setValue(value + 1)
//       setprice2(p * value)
        

//   }
//   const minsbtn =()=>{
//     setValue(value - 1)

//     if (value === 0) {
//       setValue(0)
      
//     }
    
//   }
// // const plusbtn =(price)=>{

// //   const newPrice =myCarts.filter(p => p.price == price)

// //   price2 = p.price * 

  


// // }



  

//   // // Function to handle quantity change
//   // const updateQuantity = (id, change) => {
//   //   setMyCart(prevItems =>
//   //     prevItems.map(item =>
//   //       item.id === id
//   //         ? {
//   //             ...item,
//   //             quantity: Math.max((item.quantity || 1) + change, 1),
//   //             price: ((item.price || 0) + (change > 0 ? 2 : 0)) * ((item.quantity || 1) + change)
//   //           }
//   //         : item
//   //     )
//   //   );
//   // };



//   return (
//     <div className="checkk">
//   <div className="checkksection">
//     <header>
//       <Link to="/market"><button>-Continue Shopping </button></Link>
//       <hr />

//       <div className="boxe">
//       {myCarts.map(e => (
//               <Carditem
//                 key={e.id}
//                 src={e.image}
//                 cat={e.category}
//                 title={e.title}
//                 price={e.price}
//                 pricetwo={price2}
//                 deletCardd={() => deleteCard(e.id)}
//                 pbtn={() => plusbtn(e.price)}
//                 mbtn={() => minsbtn(e.price)}
//                 QUANTITY={value}
//               />
//             ))}
//       </div>

//     </header>

//   </div>

//         <Footer/>
//     </div>
//   );
// }

// export default Check;





import './check.css';
import Nav from '../Nav bar/Nav';
import Footer from '../footer section/footer';
import { Link } from 'react-router-dom';
import Carditem from '../card item/carditem';
import { useState, useEffect } from 'react';
import visa from "./images/visa.jpeg";
import pay from "./images/pay.png";

function Check() {
  const [myCarts, setMyCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  // delet button
  const deleteCard = (id) => {
    const updatedCarts = myCarts.filter(i => i.id !== id);
    setMyCart(updatedCarts);
  };

  // Update localStorage whenever cart data changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(myCarts));
  }, [myCarts]);

  const updateQuantity = (id, change) => {
    setMyCart(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max((item.quantity || 1) + change, 1),
              totalPrice: (item.price * (Math.max((item.quantity || 1) + change, 1)))
            }
          : item
      )
    );
  };



  return (
    <div className="checkk">
      <div className="checkksection">
        <header>
          <Link to="/market"><button>-Continue Shopping </button></Link>
          <hr />
          <div className="boxe">
            {myCarts.map(e => (
              <Carditem
                key={e.id}
                src={e.image}
                cat={e.category}
                title={e.title}
                price={e.totalPrice}
                deletCardd={() => deleteCard(e.id)}
                pbtn={() => updateQuantity(e.id, 1)}
                mbtn={() => updateQuantity(e.id, -1)}
                QUANTITY={e.quantity || 1}
              />
            ))}
          </div>
      
        </header>
        <div className="visa">
          <div className="visafirst">
          <h2>Card Details</h2>
          <div className="payment">
          <div><img src={visa} alt="" /></div>
          <div><img src={pay} alt="" /></div>
          <div><img src="" alt="" /></div>
          <div><img src="" alt="" /></div>
          </div>
        
        </div>
         <form action="">
          <div className="one">
            <label htmlFor="">Account Name</label>
            <input type="text" required />
            <label htmlFor="">Account Number</label>
            <input type="text" required/>
          </div>
          <h2>Expiring date</h2>
          <div className="two">
            <input type="text" required/>
            <input type="text" required/>
          </div>
          <hr />
          <div className="balance">
            <h1>Balance<span>$ {myCarts.reduce((acc, item) => acc + (item.totalPrice || item.price), 0)}</span></h1>
            <h1>Delivery fee<span>$70</span></h1>
            <h3>Total bill amount<span>${myCarts.reduce((acc, item) => acc + (item.totalPrice || item.price ) , 0) + 70}</span></h3>
          </div>
          <button type="submit">Confirm Payment</button>
         </form>
          </div>
     
      </div>
      <Footer/>
    </div>
  );
}

export default Check;
