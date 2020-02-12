import React from 'react';
import './styles/filters.scss';

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
    </div>
  );
}

export default Filters;