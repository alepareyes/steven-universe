import React from 'react';
import './styles/filters.scss';
import Collapsible from 'react-collapsible';

const Filters = (props) => {

  const handleSearch = (ev) => {
    props.handleSearch({
      value: ev.target.value
    });
  }

  return (
    <div className="filter">
      <label htmlFor="Search Character" className="filter__label">Who are you looking for?</label>
      <input
        type="text"
        className="filter__input"
        placeholder="Search Character"
        onChange={handleSearch}
        value={props.value} />
      <Collapsible trigger="Open for filters:" className="filter__collapsible">
        <input type="radio" name="empleoactual" value="tiempocompleto" /> Gems
        <input type="radio" name="empleoactual" value="mediodia" /> Humans
        <input type="radio" name="empleoactual" value="sinempleo" /> Fusions
      </Collapsible>
    </div>
  );
}

export default Filters;