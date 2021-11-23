import FacebookLogin from 'react-facebook-login';
import React, { Component } from 'react';
import FacebookProfile from './FacebookProfile';



export default class Facebook extends Component {
    state ={
        isLogged: false,
        userID: '',
        name: '',
        email: '',
        picture:'',
        accessToken:''
    }

    responseFacebook = (response) => {
        this.setState({
            isLogged: true,
            userID: response.userID,
            name:response.name,
            email: response.email,
            picture: response.picture.data.url,
            accessToken: response.accessToken
        })
    }

    componentClicked = () => {
        console.log("clicked");
    }
    render() {
        if (this.state.isLogged) {
            return (<FacebookProfile dataProfile={this.state} />)
        } else {
            return (<FacebookLogin
                appId="1205281216631368"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                />);   
        }
    }
}