import React from 'react';
import './doorGame.css';

class doorGame extends React.Component{
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event){
        this.openDoor(event)
        this.props.checkForRobot(event.target.id);
    }


    handleCheckForGameOver(){
        this.props.checkIfGameOver();
    }

    openDoor(event){
        let listOfDoors = this.props.doors;
        let chosenDoor = listOfDoors.indexOf(listOfDoors.find(doorKey => (doorKey.id === event.target.id)));
        if(listOfDoors[chosenDoor].open === false){
            this.props.openDoorLogic(event.target.id);
        } else {
            console.log('Error: Door is already opened');
            return;
        }
    }

    render(){
        return (
            <div className="door-row">
                {
                    this.props.doors.map(door => {
                      return <img
                      key={door.id}
                      id={door.id}
                      className="door-frame"
                      src={(this.props.currentlyPlaying === false && door.open === false) || (this.props.currentlyPlaying === true && door.open === false) ? door.closedDoor : door.src}
                      isOpen={door.open} 
                      onClick={this.handleOnClick} />
                })
                }
          </div>
        );
    }
};

export default doorGame;