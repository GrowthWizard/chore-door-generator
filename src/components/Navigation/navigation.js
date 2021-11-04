import React from 'react';
import './navigation.css';
import Instructions from '../Instructions/instructions';

//import Images for rendering
import logo from './logo.svg';

class Navigation extends React.Component{

    render(){
        return (
            <div className="navigation">
                <div className="header">
                    <img src={logo} />
                </div>
                <Instructions />
            </div>
        );
    }
}

export default Navigation;