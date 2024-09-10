import './contact.css';
import Nav from '../Nav bar/Nav';
import Footer from '../footer section/footer';
import img1  from "./images/Rectangle 746.png"
import call from "./images/call.png"
import mess from "./images/mess.png"

function Contact() {
  return (
    <div className="Contact">

        <div className="sec11">
            <img id="imgg1" src={img1} alt="" />
            <h1>Contact Us for any Request</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur amet, mollis cras felis vestibulum integer nec vel commodo. Ultrices a sapien faucibus augue.</p>
            <div className="bigcont">

                <div className="left">
                    <div className="p1">
                        <img id='call' src={call} alt="" />
                        <h1>Direct Call</h1>
                        <h2>Make call on</h2>
                        <span>+33 012 455 0047</span>
                    </div>
                    <div className="p2">
                        <img src={mess} alt="" />
                        <h1>Direct Message</h1>
                        <h2>chatwith one of our customer care</h2>
                        <button>Let's Chat</button>
                    </div>
                </div>
            </div>
            <form action="">
                <h1>Book a meeting</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus adipiscing consectetur duis mi.</p>

                <div className="inps">
                    <input type="text" id="name" placeholder="Name" required/>
                    <input type="email" name="" id="email" placeholder="Email" required/>
                    <input type="text" name="" id="res" placeholder="Reason" required/>
                    <input type="date" name="" id="date" placeholder="Date" required/>
                    <input type="datetime" name="" id="dt" placeholder="Time" required/>
                </div>
                <button>Send Request</button>
            </form>


        </div>

        <Footer/>
    </div>
  );
}

export default Contact;