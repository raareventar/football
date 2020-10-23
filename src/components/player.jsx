import React, { Component } from 'react';

class Player extends Component{
  state= {
    players: [{id:1, player:["Van Persie", "T. Walcott", "Santi Carzola"]},
    {id:2, player:["Thiago", "Mohamed", "Alisson"]},
    {id:3, player:["Messi", "Countinho", "Pedri"]},
    {id:4, player:["Hazard", "Sergio", "Benzama"]}]
  };
  render(){
    return(
      <div>
        {this.state.players[this.props.id].player.map(player => <h4>{player}</h4>)}
      </div>
    );
  }

}

export default Player;
