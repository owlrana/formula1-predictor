import React from "react"
import Delayed from './Delayed';
import './App.css';

function Message(props) {

    if (props.render == false) {
        return;
    } 

    let redCheck = <div class="animation-ctn checkBoxPlacement">
                        <div class="icon icon--order-success svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
                            <g fill="none" stroke="#F44812" stroke-width="2"> 
                                <circle cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
                                <circle id="colored" fill="#F44812" cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
                                <polyline class="st0" stroke="#fff" stroke-width="10" points="43.5,77.8  112.2,77.8 " style="stroke-dasharray:100px, 100px; stroke-dashoffset: 200px;"/>   
                            </g> 
                            </svg>
                        </div>
                    </div>
    // Checkboxes END

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

    const CheckBox = () => (
        <React.Fragment>
            <div class="success-animation">
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
        </React.Fragment>
    )

    return (
        <div>
            <div className='message'>
                <Spinner />
                <Delayed waitBeforeShow={10000}>
                    <CheckBox />
                </Delayed>
                <span className="messageText">{props.message}</span>
            </div>
            
        </div>   
            
    )

};

export default Message;