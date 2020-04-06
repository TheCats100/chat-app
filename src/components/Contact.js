import React from "react";
import "./Css.css";



class Affichage extends React.Component{
    constructor(props){
        super(props);
        this.state = {online : props.online}
    }
    render(){
        return(
        <div className="Contact">
        <img className="avatar" src={this.props.avatar}/> 
            <div className="status">
                <h2 className="name">{this.props.name}</h2>
                    <div>

                        {this.state.online ? 
                        <div 
                            onClick={event =>{
                                const newState = !this.state.online;
                                this.setState({online : newState})
                            }}
                            className="status-online">
                        </div> 
                        : 
                        <div
                            onClick={event =>{
                                const newState = !this.state.online;
                                this.setState({online : newState})
                            }} 
                            className="status-offline">
                        </div> }

                        {this.state.online ? 
                        <p
                            onClick={event =>{
                                const newState = !this.state.online;
                                this.setState({online : newState})
                            }}
                            className="status-text">Online
                        </p> 
                        :
                        <p  
                            onClick={event =>{
                                const newState = !this.state.online;
                                this.setState({online : newState})
                            }}
                            className="status-text">Offline
                        </p>}
                    </div>
             </div>
        </div>
        )
    };
};

export default Affichage;
