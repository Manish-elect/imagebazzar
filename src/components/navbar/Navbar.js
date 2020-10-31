import React,{Component} from "react";
import MenuItems from "./MenuItem.js"
import "./Navbar.css"

class Navbar extends Component {
    
   state = { activer: false}

 handleClick =() => {
     this.setState({ activer: !this.state.activer})
 };
   render() { return (
        <div>
            <ul className={this.state.activer ? "navbarDiv" :"navbar-Transition navbarDiv"}>
                {MenuItems.map((item,index) => {
                    return (
                <li className="ForItems">
                    <a href={item.url} className="menuWord" >
                    {item.menu}
                    </a>
                </li>

                )})}
    
           
           </ul>
            
                <div>  
                    <div  onClick={this.handleClick} >
                    <i className={this.state.activer ? "fas fa-times threeBar position-of-cross" : "fas fa-bars threeBar "}></i>
               <h5><a href="#" style={{fontSize:"15px",color:"white",marginLeft:"40px", textDecoration:"none" ,position:"absolute",marginTop:"-20px"}}>BROWSE CATEGORIES</a></h5>

               </div>

               </div>
        </div>
    );
}
}

export default Navbar;