import React from "react";
import "./Footer.css";

function Footer(){
    return <div>
        <h1 className="heading" >World's largest collection of Creative Indian images & videos</h1>
       
        <div className="floatleft">
        <h3>All India Toll Free: 1800-11-6869</h3>
      <h5>© ImagesBazaar.com. A division of Mash Audio Visuals Pvt. Ltd. All rights reserved.</h5>
        </div>

             <ul className="info">
                <h4>Need Help</h4>
                <li><button>Contact Us</button></li>
                <li><button>Search Tips</button></li>
                <li><button>FAQ</button></li>
                <li><button>Technical</button></li>
            </ul>
             <ul className="info">
                <h4>Learn More</h4>
                <li><button>Pricing</button></li>
                <li><button>Licensing</button></li>
                <li><button>Terms of Use</button></li>
                <li><button>Privacy Policy</button></li>
            </ul>
             <ul className="info">
             <h4>Company Info</h4>
             <li><button>Home</button></li>
             <li><button>About Us</button></li>
             <li><button>Testimonials</button></li>
             <li><button>Image Research</button></li>
             </ul>
          </div> 
}
export default Footer;