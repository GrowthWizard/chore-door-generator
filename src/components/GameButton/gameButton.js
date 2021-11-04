import React from 'react';
import './gameButton.css';
import doorGame from '../DoorGame/doorGame';

class GameButton extends React.Component{
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        if(!this.props.currentlyPlaying){
            this.props.startGame();
        } else {
            console.log('Du kannst ein Spiel nur starten, nachdem du verloren oder gewonnen hast.')
        }
    }

    render(){
        return (
            <div id="start" 
                className="start-row" 
                onClick={this.handleOnClick}>
                {this.props.buttonText}
            </div>
        );
    }
}

export default GameButton;