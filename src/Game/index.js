import React, { Component } from 'react';
import './style.css';

class Game extends Component {
  render() {
    const { game } = this.props;
    if(game.status === 'in progress') {
    return <div className="game">
        <h3 className="game-h3">
           <p className = 'live'>LIVE:</p>
          <span className="team">{game.home_team.country}</span>
          <span className="vs">vs.</span>
          <span className="team">{game.away_team.country}</span>
          <p className="location">{game.location}</p>
        </h3>
      </div>;}

      else{
        return <div className="game">
            <h3 className="game-h3">
              <p className="live">Previous:</p>
              <span className="team">{game.home_team.country}</span>
              <span className="vs">vs.</span>
              <span className="team">{game.away_team.country}</span>
              <p className="location">{game.location}</p>
            </h3>
          </div>;
      }
  }
}

export default Game;
