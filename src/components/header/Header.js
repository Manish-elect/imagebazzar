import React from "react";
import "./Header.css"
function Header(){
    return(
        <div>
        
        <h5 className="word">imagesbazaar</h5>
        <div className="searchDiv sticky">
            
            <i className="fas fa-search search-icon"></i>

            
            <input type="text" placeholder="Search the world largest collection of inidan image"></input>
            <div className="vertical_div"></div>
        
            <select className="selector imgWordBlock">
                <option >Images</option>
                <option>Videos</option>

            </select>  

            
        </div>
        </div>
    );
}

export default Header;