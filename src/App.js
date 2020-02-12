import React from 'react';
import Header from './Header';
import List from './CharacterList';
// import CharacterDetail from './CharacterDetails';
import apiCharacters from './api/api.json';
import Filters from './Filters';
import "./styles/app.scss";
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      search: "",
      characters: apiCharacters.results,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }



  // EVENTOS

  handleSearch(data) {
    this.setState({
      search: data.value
    })
  }

  // HELPERS

  filteredCharacters() {
    return this.state.characters
      .filter(character => character.name.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  // RENDER

  // renderCharacterDetails(props) {

  //   const routeId = props.match.params.id;
  //   const character = this.state.characters.find(item => item.id == routeId);

  //   if (character === undefined) {
  //     return <p className="notfound">Character not found!! Sorry :( </p>
  //   } else {
  //     return <CharacterDetail
  //       character={character}
  //     />
  //   }

  // }


  render() {
    console.log(this.state.characters);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Filters handleSearch={this.handleSearch} value={this.state.search} />
            <List characters={this.state.characters} />
          </Route>
          <Route exact path="/character/:id">
            {this.renderCharacterDetails}
          </Route>
        </Switch>
      </div >
    );
  }
}


export default App;
