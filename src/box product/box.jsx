import "../box product/box.css"
import { useState } from "react"
import iphone1 from "../Home page/images/iphone.jpeg"
import { Link } from "react-router-dom"


const Box=({image_url ,brand,price, disc ,prodView, model ,onaddtocart})=>{
   

    return(


        <div className="box">

<Link onClick={prodView} to={`/product`}><img src={image_url}/></Link>
<h1>{brand}</h1>
<span>{model}</span>
<h2>{price}</h2>
<del>$1000</del>
<button id="btn12" onClick={onaddtocart}>Add To Cart</button>



        </div>

    )

}
export default Box