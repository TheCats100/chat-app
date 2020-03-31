import React from 'react';
import './Css.css';




const Contact = function (props){
    return(
        <div className="Contact">
        <img className="avatar" src={props.avatar}/> 
        <div className="status">
            <h2 className="name">{props.name}</h2>
            <div>
        {props.online ? <div className="status-online"></div> : <div className="status-offline"></div> }
        {props.online ? <div className="status-text">"Online"</div> : <div className="status-text">"Offline"</div>}
        </div>
        </div>
        </div>
        )
    }

export default Contact;
