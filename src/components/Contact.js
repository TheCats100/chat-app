import React from "react";
import "./Css.css";

const contact1 = {
  name: "Marbouille",
  avatar: "https://randomuser.me/api/portraits/women/18.jpg",
  online: true
};

const Contact = function(Lina) {
  return (
    <div className="Contact">
      <img className="avatar" src={contact1.avatar} />
      <div className="status">
        <h2 className="name">{contact1.name}</h2>
        <div>
          {contact1.online ? (
            <div className="status-online" />
          ) : (
            <div className="status-offline" />
          )}
          {contact1.online ? (
            <div className="status-text">"Online"</div>
          ) : (
            <div className="status-text">"Offline"</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
