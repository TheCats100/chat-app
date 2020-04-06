import React from "react";
import "./Css.css";

class Affichage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { online: props.online };
    }
    render() {
      return (
        <div className="Contact">
          <img className="avatar" src={this.props.avatar} alt="" />
          <div className="status">
            <h2 className="name">{this.props.name}</h2>
            <div
              className="status"
              onClick={event => {
                const newState = !this.state.online;
                this.setState({ online: newState });
              }}
            >
              <div
                className={this.state.online ? "status-online" : "status-offline"}
              />
              <p className="status-text">
                {this.state.online ? "online" : "offline"}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Affichage;
