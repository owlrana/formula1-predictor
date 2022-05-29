import React, { useState } from "react"
import ReactDOM from 'react-dom/client';
import './App.css';
import MessagesChoreography from './MessagesChoreography'
import Message from './Message.js'
import ErrorMessage from './ErrorMessage.js'
import Delayed from './Delayed';
import Final from './Final.js'

function Modal() {

    const [inputs, setInputs] = React.useState({
        team: null,
        circuit: null,
        weather: null,
        background: "/media/movies/teams/f1intro.mp4"
    })

    function handleChange(event) {
        const {name, value} = event.target

        setInputs(prevValues => ({
            ...prevValues,
            [name]: value, 
            background: "/media/movies/" + value
        }))
        console.log(inputs.background)
    }
    
    const[render, setRender] = useState(false);

    function renderMessages() {
        setRender(true);
    }

    function findLevel(props) {
        return 1;
    }

    function start () {
        
    }

    return (
        <div id="everything"> 
            <React.Fragment key={inputs.background}>
                <div id="container" className="background">
                    <video id="videobcg" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                        <source
                        src={inputs.background}
                        type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </React.Fragment>

            <div id="modal">
                <img src="/media/images/f1Logo.png" alt="F1 logo" id="logo"/>
                <p id="designedDeveloped">designed and developed by </p>
                <p id="boldText">Team DRS</p>

                <div className="form">
                    <select id="circuit" name="circuit" className="inputSelect" onChange={handleChange}>
                        <option value="NULL">Select Grand Prix</option> 
                        <option value="circuits/australian.mp4">Australian Grand Prix</option>
                        <option value="circuits/austrian.mp4">Austrian Grand Prix</option>
                        <option value="circuits/styrian.mp4">Styrian Grand Prix</option>
                        <option value="circuits/hungarian.mp4">Hungarian Grand Prix</option>
                        <option value="circuits/british.mp4">British Grand Prix</option>
                        <option value="circuits/spanish.mp4">Spanish Grand Prix</option>
                        <option value="circui\ts/belgian.mp4">Belgian Grand Prix</option>
                        <option value="circuits/italian.mp4">Italian Grand Prix</option>
                        <option value="circuits/tuscan.mp4">Tuscan Grand Prix</option>
                        <option value="circuits/russian.mp4">Russian Grand Prix</option>
                        <option value="circuits/eifel.mp4">Eifel Grand Prix</option>
                        <option value="circuits/portuguese.mp4">Portuguese Grand Prix</option>
                        <option value="circuits/emilia.mp4">Emilia Romagna Grand Prix</option>
                        <option value="circuits/turkish.mp4">Turkish Grand Prix</option>
                        <option value="circuits/bahrain.mp4">Bahrain Grand Prix</option>
                        <option value="circuits/sakhir.mp4">Sakhir Grand Prix</option>
                        <option value="circuits/abudhabi.mp4">Abu Dhabi Grand Prix</option>
                    </select>

                    <select id="weather" name="weather" className="inputSelect" onChange={handleChange}>
                        <option value="NULL">Select Weather</option> 
                        <option value="weather/clear.mp4">Dry</option> 
                        <option value="weather/cloudy.mp4">Cloudy</option>
                        <option value="weather/rain.mp4">Rain</option>
                    </select>

                    <select id="team" name="team" className="inputSelect" onChange={handleChange}>
                        <option value="teams/f1intro.mp4">Select Team</option> 
                        <option value="teams/alfaRomeo.mp4">Alfa Romeo Racing Orlen</option>
                        <option value="teams/redBull.mp4">Aston Martin Red Bull Racing</option>
                        <option value="teams/racingPoint.mp4">BWT Racing Point F1 Team</option>
                        <option value="teams/haas.mp4">Haas F1 Team</option>
                        <option value="teams/mercedes.mp4">Mercedes-AMG Petronas F1 Team</option>
                        <option value="teams/mclaren.mp4">McLaren F1 Team</option>
                        <option value="teams/renault.mp4">Renault DP World F1 Team</option>
                        <option value="teams/alphaTauri.mp4">Scuderia AlphaTauri Honda</option>
                        <option value="teams/ferrari.mp4">Scuderia Ferrari</option>
                        <option value="teams/williams.mp4">Williams Racing</option>
                    </select>

                    <button
                        className="form--button" onClick={renderMessages}>
                        <span className="inputText buttonText">PREDICT RESULT</span>
                    </button>
                </div>

                <span id="copyright">Copyright © 2022</span>
                <span id="authors">Devang Pandey | Rahul Rana | Satyam Mishra</span>
            </div>

            <MessagesChoreography render={render} inputs={inputs} team={inputs.team} circuit={inputs.circuit} weather={inputs.weather}/>

        </div>
    );
}

export default Modal;