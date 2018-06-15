import React, { Component } from "react";
import "./style.css";
import Game from "../Game";

class GoalTimeLine extends Component {
  render() {
    const { game } = this.props;
    // return console.log({game});
    return <div className="game">
        <div className="home-team">
          <span className = 'home'>
            {game.home_team.code}: {game.home_team.goals}
            <div className="goal-bar"></div>
          </span>
        </div>
        <div className="away-team">
          <span className= 'away'>
            {game.away_team.code}: {game.away_team.goals}
            <div className="goal-bar">

    <span>⚽️</span>
            </div>
          </span>
        </div>
      </div>;
  }
}

export default GoalTimeLine;
