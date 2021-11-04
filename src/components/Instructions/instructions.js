import React from 'react';
import './instructions.css';
import star from './star.svg';

//import 

class Instructions extends React.Component{

    render(){
        return (
            <div className="title-row">
                <img src={star} />
                <p className="instructions-title">Anleitung</p>
                <img src={star} />
                <table className="instructions-row">
                <tr>
                    <td className="instructions-number">1</td>
                    <td className="instructions-text">Hinter einer dieser Türen verbirgt sich der böse Haushaltsroboter.</td>
                </tr>
                <tr>
                    <td className="instructions-number">2</td>
                    <td className="instructions-text">Du willst dich vor deinen Haushaltspflichten drücken, vermeide also den Haushaltsroboter zu treffen!</td>
                </tr>
                <tr>
                    <td className="instructions-number">3</td>
                    <td className="instructions-text">Vermeide den Haushaltsroboter bis du die letzte Tür geöffnet hast... und du gewinnst!</td>
                </tr>
                <tr>
                    <td className="instructions-number">4</td>
                    <td className="instructions-text">Wie lange kannst du dem Haushaltsroboter entgehen?</td>
                </tr>
            </table>
            </div>
        );
    }
}

export default Instructions;