import "../footer section/footer.css"
import appstore from "./images/appstore4.png"
import googleapp from "./images/googleplay.png"
import twitter from "./images/twitter.png"
import face from "./images/face.png"
import insta from "./images/insta.png"


function Footer() {
    return (
        
      <div className="footer">

        <section id="firstf">
        <span><h1>Logo</h1></span>
        <h2>Subscribe To Get The Best Deals First</h2>
        <input type="text"  placeholder="Enter your email address"/>
        <button>REQUEST</button>
        <h3>DOWNLOAD OUR FREE APP</h3>
        <h4>Get access to exclusive offers!</h4>
        <div id="imgs">
            <img src={appstore}  />
            <img src={googleapp}  />
        </div>
        <div className="conm">
        <div className="let">
            <h1>LET US HELP YOU</h1>
            <div className="all">
                  <a href="http://"></a>
            <a href="http://">Help Center</a>
            <a href="http://">How to shop on Jumia?</a>
            <a href="http://">Delivery options and timelines</a>
            <a href="http://">How to return a product ?</a>
            <a href="http://">Corporate and bulk purchases</a>
            </div>
          
        </div>
        <div className="about">
            <h1>ABOUT OUR STORE</h1>
            <div className="all2">
                  <a href="http://"></a>
            <a href="http://">About us</a>
            <a href="http://">Our careers</a>
            <a href="http://">Our Express</a>
            <a href="http://">Terms and Conditions</a>
            <a href="http://">Privacy policy</a>
            <a href="http://">Our Prime</a>
            <a href="http://">Stay Safe</a>
            <a href="http://">Our global</a>
            </div>
          
        </div>
        <div className="MONEY">
            <h1>MAKE MONEY WITH JUMIA</h1>
            <div className="all2">
                  <a href="http://"></a>
            <a href="http://">Sell on Jumia</a>
            <a href="http://">Become a Sales Consultant</a>
            <a href="http://">Become a Jumia Vendor Service Provider</a>
            <a href="http://">Become a Logistics Service Partner</a>
            <a href="http://">Join the Jumia DA Academy</a>
            <a href="http://">Join the Jumia KOL Program</a>
            </div>
          
        </div>
        </div>

        <div className="iconss">
          <a href="http://"><img src={face} alt="" /></a>
          <a href="http://"><img src={twitter} alt="" /></a>
          <a href="http://"><img src={insta} alt="" /></a>
        </div>
        </section>
     
        
      </div>
    );
  }
  
  export default Footer;
  