import React from 'react';
import './styles/filters.scss';
import Collapsible from 'react-collapsible';


const Filters = (props) => {

  const handleSearch = (ev) => {
    props.handleSearch({
      value: ev.target.value
    });
  }

  function handleSpecies(ev) {
    const specieSelected = ev.target.value;
    props.handleSpecies(specieSelected);
  }

  console.log(props.specieSelected);
  return (
    <div className="filter">
      <label htmlFor="Search Character" className="filter__label">Who are you looking for?</label>
      <input
        type="text"
        className="filter__input"
        placeholder="Search Character"
        onChange={handleSearch}
        value={props.value} />

      <Collapsible trigger="Open for filters" className="collapsible">
        <div className="collapsible__container">
          <label className="filter__radio--label" name="search" htmlFor="gem">Gems
          <input
              className=""
              id="gem"
              type="radio"
              checked={props.specieSelected === "Gem"}
              name="search"
              value="Gem"
              onChange={handleSpecies} /></label>


          <label className="filter__radio--label" name="search" htmlFor="human">Humans
          <input
              className=""
              id="human"
              checked={props.specieSelected === "Human"}
              type="radio"
              name="search"
              value="Human"
              onChange={handleSpecies} /></label>

          <label className="filter__radio--label" name="search" htmlFor="fusion">Fusions
          <input
              className=""
              id="fusion"
              type="radio"
              checked={props.specieSelected === "Fusion"}
              name="search"
              value="Fusion"
              onChange={handleSpecies} /></label>

          <label className="mb-2" name="species" htmlFor="all"> All
          <input
              className="input-radio form-control ml-2 mt-3 text-left"
              id="all"
              type="radio"
              name="search"
              checked={props.specieSelected === "All"}
              value="All"
              onChange={handleSpecies}
            /></label>
        </div>
      </Collapsible>

    </div>
  );
}

export default Filters;