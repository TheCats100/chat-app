import React from "react";
import "./Css.css";



const Affichage = function (props){
    return(
        <div className="Contact">
        <img className="avatar" src={props.avatar}/> 
            <div className="status">
                <h2 className="name">{props.name}</h2>
                    <div>
                        {props.online ? <div className="status-online"></div> : <div className="status-offline"></div> }
                        {props.online ? <p className="status-text">Online</p> : <p className="status-text">Offline</p>}
                    </div>
             </div>
        </div>
  );
};

export default Affichage;
