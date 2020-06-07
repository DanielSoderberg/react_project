import React, { Component } from 'react'
import {redirect } from "react-router-dom";

 class Redirect extends Component {
state = {redirect: null};

    render() {
        if (this.state.redirect) {
            return >Redirect to={this.state.redirect} 
        }
        return (
            <div>
                
            </div>
        )
    }
}
export default Redirect;