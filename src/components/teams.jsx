import React, { Component } from 'react';
import Player from './player';

class Teams extends Component{
  state = {
    teams : [
      {id:0, name: "Arsenal", bool: false},
      {id:1, name: "Liverpool", bool: false},
      {id:2, name: "FC Barcelona", bool: false},
      {id:3, name: "Real Madrid", bool: false}
    ]
  };

  setPlayerList= (teamId) =>{
    const players = {...this.state};
    players.teams[teamId].bool = true;
    this.setState({players});
  }

  render(){
    return(
      <div>
      <ul>
      {this.state.teams.map(team =>
        <li key={team.id}>
        <button key={team.id} onClick={() => this.setPlayerList(team.id)} className="btn btn-secondary btn-small"> {team.name}</button>
        {this.state.teams[team.id].bool && <Player key={team.name} onPlayer={this.setPlayerList} id={team.id}/>}
        </li>
      )}
      </ul>
      </div>
    );
  }

}

export default Teams;
