import React from 'react';
import './Score.css';

class Score extends React.Component {
    render() {
        return (
            <div className="score">
                <div>Dein Score:</div>
                <div className="wins">Siege: {this.props.winCount === 0 ? 0 : this.props.winCount}</div>
                <div className="losses">Verloren: {this.props.lossCount === 0 ? 0 : this.props.lossCount}</div>
            </div>
        )
    }
}

export default Score;