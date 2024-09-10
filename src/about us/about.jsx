import "./about.css"
import Nav from "../Nav bar/Nav.jsx";
import ab1 from "./images/ab1.png"
import ab2 from "./images/ab2.png"
import ab3 from "./images/ab3.png"
import ab4 from "./images/ab4.png"

import Footer from "../footer section/footer.jsx";

// imgs
import l1 from "./images/Rectangle 769.png"
import l2 from "./images/Rectangle 770.png"
import l3 from "./images/Rectangle 771.png"
import l4 from "./images/Rectangle 768.png"
import l5 from "./images/Rectangle 772.png"
import l6 from "./images/Rectangle 767.png"



function About() {

    // const immmgs = [l1 , l2 , l3 , l4 ,l5 ,l6]
    // let continar = document.getElementById("bigimgs4")
    // for (let i = 0; i < immmgs.length; i++) {
    //     let img1 = document.createElement("img")
    //     continar.append(img1)
    //     img1.src = immmgs[i]

    // }

    
    return (
    <div className="aboutus">
    <section id="section2">
    <div className="text">
        <div className="one">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar.</p>
        </div>
        <div className="two">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, </p>
        </div>
        <div className="there">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, </p>
        </div>
    </div>
    <div className="biggimgs">
        <div className="imgs1">
        <img src={ab1} />
        <img src={ab2} />
        </div>
        <div className="imgs2">
        <img src={ab3} />
        <img src={ab4} />
        </div>
    </div>

    </section>
    <section id="secton3">
        <div className="text4">
        <h1>Our Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, </p>
        </div>
        <div id="bigimgs4">
            <img src={l1} />
            <img src={l2} />
            <img src={l3} />
            <img src={l4} />
            <img src={l5} />
            <img src={l6} />
            
        </div>

    </section>
   


        <Footer/>
      </div>
    );
  }
  
  export default About;