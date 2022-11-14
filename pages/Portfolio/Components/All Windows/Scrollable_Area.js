import React from "react";

function Scrollable_Area(props){
    return(
      <div id="Rows" className="Rows"> 
       <div className="Rows-scrollbar">
           {props.children}
       </div>
      </div>
    );
}
export default Scrollable_Area;