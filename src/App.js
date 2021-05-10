import React, {Component} from 'react';
import {Search} from './components/Search/search.component';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      players:[],
      searchFields: ''
            }
      }
      componentDidMount(){
        fetch("https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e")
        .then(response => response.json())
        .then(users => this.setState({players: users}));
      }
  render(){
    const { players, searchFields} = this.state;
    const playerList = players.playerList && players.playerList.sort((a,b)=> a.Value-b.Value);
     
    const filteredPlayers = playerList && playerList.filter(player =>
      (player.TName.toLowerCase().includes(searchFields.toLowerCase()))
      || (player.PFName.toLowerCase().includes(searchFields.toLowerCase()))
      );   

     return(
      <div className='App'>
        <h1>Players</h1>
        <Search 
        placeholder='search players'
        handleChange={e =>this.setState({searchFields:e.target.value})}
        />
        <CardList players = {filteredPlayers}/>
         
      </div>
    );
  }
}

export default App;
