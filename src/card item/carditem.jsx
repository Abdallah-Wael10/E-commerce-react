






import "../box product/box.css"
import { useState } from "react"
import iphone1 from "../Home page/images/iphone.jpeg"


const Carditem=({src ,cat,price, Total, title ,deletCardd ,pbtn , mbtn , QUANTITY ,pricetwo})=>{
    const [cart, setcart] = useState([]);
    const addToCart = (Box) => {
      setcart([...cart, Box]);
    };
    return(


        <div className="carditem">

<div className="boox">
<img src={src} />
<div className="firstsec">
    <h1>{title}</h1>
    <h2>{cat}</h2>
    <button id='btn01'>Add to whishlist</button>
    <button onClick={deletCardd} id='pop'>Delete</button>
</div>
<div className="secondsection">
    <button onClick={pbtn}>+</button>
    <p>{QUANTITY}</p>
    <button onClick={mbtn}>-</button>

</div>
<div className="unit">
    <h1>${price}</h1>
</div>
<div className="total">
    <h1>${Total}</h1>
    <h2>{pricetwo}</h2>
</div>
</div>



        </div>

    )

}
export default Carditem















