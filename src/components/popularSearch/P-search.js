import React from "react";
import "./P-search.css"
import items from "./P-searchItems";
function P_search(){
    return(
        <div className="di">
            <p >Popular Searches</p>
        {items.map((item,index) =>{
            return (
                <span className="divForItem">
                <a href="#">{item}</a>
                </span>
            )
        })}
        </div>
    )
}

export default P_search;