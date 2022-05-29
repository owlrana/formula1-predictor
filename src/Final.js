import React, { useState } from "react"
import Delayed from './Delayed';
import './App.css';

function Final(props) {

    let team = String(props.inputs.team).slice(6,-4).toLowerCase();
    console.log("TEAM NAME IS: ")
    console.log(team)

    let circuit = String(props.inputs.circuit).slice(9, -4);
    let circuitName = circuit + " Grand Prix";

    console.log("Props received inside Final ->");
    console.log(props.inputs)

    let imgSrc = "/media/images/teams/" + team + ".png"

    function findPositionJugaad() {
      //return team;
      let ans;
      if (team == "redbull") {
        ans = Math.floor((Math.random() * 3) + 1);
      } else if (team == "mercedes") {
        ans = Math.floor((Math.random() * 2) + 1);
      } else if (team == "ferrari") {
        ans =  Math.floor((Math.random() * 4) + 2);
      } else if (team == "mclaren") {
        ans =  Math.floor((Math.random() * 8) + 4);
      } else if (team == "renault") {
        ans =  Math.floor((Math.random() * 12) + 6);
      } else if (team == "racingpoint") {
        ans =  Math.floor((Math.random() * 10) + 6);
      } else if (team == "astonmartin") {
        ans =  Math.floor((Math.random() * 10) + 10);
      } else if (team == "alphatauri") {
        ans =  Math.floor((Math.random() * 14) + 6);
      } else if (team == "haas") {
        ans =  Math.floor((Math.random() * 20) + 12);
      } else if (team == "williams") {
        ans =  Math.floor((Math.random() * 10) + 10);
      } else if (team == "alfaromeo") {
        ans =  Math.floor((Math.random() * 10) + 10);
      }

      if (ans <= 0 || ans > 20 || ans === undefined) {
        return "DNF"
      }
      
      return ans;
    }

    let position = findPositionJugaad();

    function reloadPage() {
      window.location.reload();
    }

    return (
    <div id="result">
        <React.Fragment key={1}>
            <div id="container2" className="background2">
                <video id="videobcg" className="blurin" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                    <source
                    src="/media/movies/after/endScreen.mp4"
                    type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </React.Fragment>

        <img src="/media/images/f1Logo.png" alt="F1 logo" id="logoEnd"/>

        <Delayed waitBeforeShow={3000}>
          <span id="positionText">P{position}</span>
          <Delayed waitBeforeShow={1250}>
            <span id="inText">in</span>
            <span id="circuitText">{circuitName}</span>
            <Delayed waitBeforeShow={2050}>
              <img src={imgSrc} alt="Team logo" id="teamLogo"/>
              <Delayed waitBeforeShow={4500}>
                <img src={"/media/images/retry.png"} alt="Team logo" id="restartApp" onClick={reloadPage}/>
            </Delayed>
          </Delayed>
          </Delayed>        
        </Delayed>
        
    </div>
  );
}

export default Final;