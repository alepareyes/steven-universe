import React from 'react';
import Header from './Header';
import List from './CharacterList';
import CharacterDetails from './CharacterDetails';
import apiCharacters from './api/fetch';
import Filters from './Filters';
import "./styles/app.scss";
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      search: "",
      characters: [],
      specieSelected: "All",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
  }


  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }


  // EVENTOS

  handleSearch(data) {
    this.setState({
      search: data.value
    })
  }

  handleSpecies(specieSelected) {
    this.setState({
      specieSelected
    })

  }

  // HELPERS

  filteredCharacters() {
    return this.state.characters
      .filter(character => character.name.toLowerCase().includes(this.state.search.toLowerCase()))
      .filter(character => character.species.includes(this.state.specieSelected) || ("All" === this.state.specieSelected))
  }

  // RENDER

  renderCharacterDetails(props) {

    const routeId = props.match.params.id;

    const character = this.state.characters.find(item => item.id == routeId);

    if (character === undefined) {
      return <p className="notfound">Character not found!! Sorry :( </p>
    } else {
      return <CharacterDetails
        character={character}
      />
    }

  }


  render() {
    console.log(this.state.characters);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Filters
              specieSelected={this.state.specieSelected}
              handleSearch={this.handleSearch}
              value={this.state.search}
              handleSpecies={this.handleSpecies} />

            <List characters={this.filteredCharacters()} />
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
