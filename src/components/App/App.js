import './App.css';
import React from 'react';
import Navigation from '../Navigation/navigation';
import Score from '../Score/Score';
import DoorGame from '../DoorGame/doorGame';
import GameButton from '../GameButton/gameButton';

//Imports Pictures for rendering later
import closedDoor from './closed_door.svg';
import robotDoor from './robot_door.svg';
import beachDoor from './beach_door.svg';
import spaceDoor from './space_door.svg';

const doorImage = {
    closedDoor: closedDoor,
    robot: robotDoor,
    beach: beachDoor,
    space: spaceDoor
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numClosedDoors: 0,
      currentlyPlaying: false,
      doors: [
        {id: 'door1', src: '', closedDoor: doorImage.closedDoor, open: false},
        {id: 'door2', src: '', closedDoor: doorImage.closedDoor, open: false},
        {id: 'door3', src: '', closedDoor: doorImage.closedDoor, open: false}
      ],
      startButtonText: 'Spiel starten',
      wins: 0,
      losses: 0
    };
    this.handleGameConfigurations = this.handleGameConfigurations.bind(this);
    this.openDoor = this.openDoor.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.randomChoreDoorGenerator = this.randomChoreDoorGenerator.bind(this);
    this.checkForRobot = this.checkForRobot.bind(this);
  }

  handleGameConfigurations(){
    this.resetGameSettings();
    this.closeDoors();
    this.randomChoreDoorGenerator();
  }

  openDoor(door){
    if (this.state.currentlyPlaying === false){
      this.gameOver();
    } else {
      console.log(`Du hast ${door} geöffnet.`);
      let listOfDoors = this.state.doors;
      let index = listOfDoors.indexOf(listOfDoors.find(doorKey => (doorKey.id === door)));
      listOfDoors[index].open = true;
      this.reduceDoors();
      this.setState({doors: listOfDoors});
    }
  }

  checkForRobot(door) {
    if(this.state.numClosedDoors === 1){
      this.gameOver('win');
    } else {
      let listOfDoors = this.state.doors;
      let index = listOfDoors.indexOf(listOfDoors.find(doorKey => (doorKey.id === door)));
      if(listOfDoors[index].src === doorImage.robot){
        console.log('Viel Spaß beim Putzen!');
        this.gameOver();
        this.setState({currentlyPlaying: false});
      }
    }
  }

  reduceDoors() {
    let numOfDoors = this.state.numClosedDoors;
    --numOfDoors;
    this.setState({numClosedDoors: numOfDoors});
  }

  randomChoreDoorGenerator() {
    const randomDoorGenerator = Math.floor(Math.random() * 3);
    let randomDoors = this.state.doors;
    if (randomDoorGenerator === 0) {
      randomDoors[0].src = doorImage.robot;
      randomDoors[1].src = doorImage.beach;
      randomDoors[2].src = doorImage.space;
      this.setState({doors: randomDoors});
    } else if (randomDoorGenerator === 1) {
      randomDoors[0].src = doorImage.beach;
      randomDoors[1].src = doorImage.robot;
      randomDoors[2].src = doorImage.space;
      this.setState({doors: randomDoors});
  } else {
      randomDoors[0].src = doorImage.space;
      randomDoors[1].src = doorImage.beach;
      randomDoors[2].src = doorImage.robot;
      this.setState({doors: randomDoors});
  }
  console.log('Türen wurden generiert.')
}

  gameOver(status) {
    if (status === 'win') {
      this.countWins();
      this.setState({currentlyPlaying: false, startButtonText: 'Gewonnen! Erneut spielen?'});
    } else {
      this.countLosses();
      this.setState({startButtonText: 'Game Over! Erneut spielen?'});
    }
  }

  countWins(){
    if(this.state.currentlyPlaying){
    let numberOfWins = this.state.wins;
    numberOfWins++;
    this.setState({wins: numberOfWins});
    } else {
      return;
    }
  }

  countLosses(){
    if(this.state.currentlyPlaying){ 
    let numberOfLosses = this.state.losses;
    numberOfLosses++;
    this.setState({losses: numberOfLosses});
    } else {
      return;
    }
  }

  closeDoors() {
    console.log('Alle Türen sind geschlossen.');
    let listOfDoors = this.state.doors;
    listOfDoors[0].open = false;
    listOfDoors[1].open = false;
    listOfDoors[2].open = false;
    this.setState({listOfDoors});
  }

  resetGameSettings(){
    console.log('GameSettings RESET is DONE');
    this.setState({
      numClosedDoors: 3,
      currentlyPlaying: true,
      doors: [
        {id: 'door1', src: '', closedDoor: doorImage.closedDoor},
        {id: 'door2', src: '', closedDoor: doorImage.closedDoor},
        {id: 'door3', src: '', closedDoor: doorImage.closedDoor}
      ],
      startButtonText: 'Viel Glück!'
  });
  }

  render() {
    return (
      <div>
        <Navigation />
        <Score winCount={this.state.wins} lossCount={this.state.losses}/>
        <DoorGame
          doors={this.state.doors}
          currentlyPlaying={this.state.currentlyPlaying}
          openDoorLogic={this.openDoor}
          checkIfGameOver={this.gameOver}
          checkForRobot={this.checkForRobot}/>
        <GameButton
          buttonText={this.state.startButtonText}
          currentlyPlaying={this.state.currentlyPlaying}
          startGame={this.handleGameConfigurations} />
      </div>
    );
  }
}

export default App;
