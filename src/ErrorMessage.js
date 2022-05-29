import React from 'react';
import ReactDOM from 'react-dom/client';
import Delayed from './Delayed';
import './App.css';

function ErrorMessage(props) {

    if (props.render == false) {
        return;
    } 

    const Spinner = () => (
        <React.Fragment>
          <svg class="spinner" width="50" height="50" viewBox="0 0 100 100">
            <circle class="background" r="24" cx="50" cy="50"></circle>
            <path
              class="line"
              d="M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50"
            ></path>
          </svg>
        </React.Fragment>
    )

    const Cross = () => {
        return (
            <img src="/media/images/warning.png" id="cross" alt="warning" />
    )}

    return (
        <div>
            <div id='message'>
                <Cross />
                <span className="messageText">Invalid Input</span>
            </div>
            
        </div>   
            
    )

};

export default ErrorMessage;