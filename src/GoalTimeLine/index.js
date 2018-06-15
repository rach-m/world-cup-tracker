import React, { Component } from "react";
import "./style.css";
import Game from "../Game";

class GoalTimeLine extends Component {
  render() {
    const { game } = this.props;
    // return console.log({game});
    return <div className="game">
        <div className="home-team">
          <span className="home">
            {game.home_team.code}: {game.home_team.goals}
            <div className="goal-bar">
              {game.home_team_events.map(goal => {
                if (goal.type_of_event === "goal" || goal.type_of_event === "goal-own" || goal.type_of_event === "goal-penalty") {
                  return <span className = 'ball'>⚽️</span>;
                }
              })}
            </div>
          </span>
        </div>
        <div className="away-team">
          <span className="away">
            {game.away_team.code}: {game.away_team.goals}
            <div className="goal-bar">
              {game.away_team_events.map(goal => {
                if (goal.type_of_event === "goal" || goal.type_of_event === "goal-own" || goal.type_of_event === "goal-penalty") {
                  return <span className = 'ball' style = {top= goal.type_of_event.time} >⚽️</span>;
                }
              })}
            </div>
          </span>
        </div>
      </div>;
  }
}

export default GoalTimeLine;
