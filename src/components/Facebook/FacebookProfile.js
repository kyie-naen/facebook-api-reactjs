import React, { Component } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class FacebookProfile extends Component{
    render() {
        return (
            <div>
                <img src={this.props.dataProfile.picture} alt={this.props.dataProfile.name} />
                <h3>Welcome {this.props.dataProfile.name}</h3>
                <p>Email: {this.props.dataProfile.email}</p>
            </div>
        );
    }
}