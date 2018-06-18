import React, { Component } from "react";
import "./style.css";

class GoalTimeLine extends Component {
  render() {
    const { game } = this.props;
    return (
      <div className="game">
        <div className="home-team">
          <span className="home">
            {game.home_team.code}: {game.home_team.goals}
            <div className="goal-bar">
              {game.home_team_events.map(goal => {
                const time = Number(goal.time.replace("'", "").slice(0, 2));
                const style = { left: time * 10, top: 10};
                if (
                  goal.type_of_event === "goal" ||
                  goal.type_of_event === "goal-penalty"
                ) {
                  return (
                    <span className="ball" style={style}>
                      ⚽️
                      <div className = 'display'>
                      {time}'
                      <br />
                      {goal.player}
                      </div>
                    </span>
                  );
                }
              })}
              {game.away_team_events.map(goal => {
                const time = Number(goal.time.replace("'", "").slice(0, 2));
                const style = { left: time *10, top: 10 };
                if (goal.type_of_event === "goal-own") {
                  return <span className="ball" style={style}>
                      ⚽️
                      <div className="display">
                        {time}'
                        <br />
                        {goal.player}
                      </div>
                    </span>;
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
                const time = Number(goal.time.replace("'", "").slice(0, 2));
                const style = { left: time *10, top: 10 };
                if (
                  goal.type_of_event === "goal" ||
                  goal.type_of_event === "goal-penalty"
                ) {
                  return <span className="ball" style={style}>
                      ⚽️
                      <div className="display">
                        {time}'
                        <br />
                        {goal.player}
                      </div>
                    </span>;
                }
              })}
              {game.home_team_events.map(goal => {
                const time = Number(goal.time.replace("'", "").slice(0, 2));
                const style = { left: time *10, top: 10 };
                if (goal.type_of_event === "goal-own") {
                  return <span className="ball" style={style}>
                      ⚽️
                      <div className="display">
                        {time}'
                        <br />
                        {goal.player}
                      </div>
                    </span>;
                }
              })}
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default GoalTimeLine;
