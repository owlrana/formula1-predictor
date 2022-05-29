import React, { useState } from "react"
import ReactDOM from 'react-dom/client';
import './App.css';
import Message from './Message.js'
import ErrorMessage from './ErrorMessage.js'
import Delayed from './Delayed';
import Final from './Final.js'

const MessagesChoreography = (props) => {

    let render = props.render;
    if (render == false) {
        return;
    }

    if (props.team == null || props.circuit == null || props.weather == null) {
        return (
            <div className="allMessages">
                <ErrorMessage render = {true} message = {"Incorrect Inputs"}/>
            </div>
            
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('container'));
    root.render (
        <React.Fragment key={1}>
                <div id="container" className="background">
                    <video id="videobcg" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                        <source
                        src="/media/movies/after/predict.mp4"
                        type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </React.Fragment>
    )

    return (
    <React.Fragment>
        <div className="allMessages">
            <Message render = {render} message = {"Analysing Inputs"}/>
            <Delayed waitBeforeShow={12000}>
                <Message render = {render} message = {"Setting-up Environments"}/>
                <Delayed waitBeforeShow={12000}>
                    <Message render = {render} message = {"Simulating Results"}/>
                            <Delayed waitBeforeShow={12000}>
                                <Message render = {render} message = {"Deleting Temporary Files"}/>
                                <Delayed waitBeforeShow={12000}>
                                    <Message render = {render} message = {"Preparing Result"}/>
                                    <Delayed waitBeforeShow={8000}>
                                        {console.log("route to next page")}
                                        {console.log(props.inputs)}
                                        <Final inputs={props.inputs}/>
                                    </Delayed>
                            </Delayed>
                        </Delayed>
                    </Delayed>
                </Delayed>
        </div>
    </React.Fragment>
)}

export default MessagesChoreography;