import React from 'react';
import "./styles/characterDetails.scss";
import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {

  // function whichSpecie(specie) {
  //   if (specie === "Alien") {
  //     return <GiAlienSkull className="icon--alien" />
  //   } else {
  //     return <GiPerson className="icon--human" />
  //   }
  // }


  // function whichStatus(status) {
  //   if (status === "Alive") {
  //     return <FaHeartbeat className="icon--heart" />
  //   } else if (status === "unknown") {
  //     return
  //   } else {
  //     return <FaBookDead className="icon--dead" />
  //   }
  // }

  const { image, name, nicknames, occupation, species, gem, status, episode } = props.character;


  return (

    <div className="details">

      <Link to="/" >
        Go to index
        </Link>
      <img className="details__img" src={image.current} />

      <div className="details__gem">
        <img className="details__gem--img" src={gem.url} />
        <span className="details__gem--name">{gem.name}</span>
      </div>


      <div className="details__info">
        <h2 className="details__info--name">{name}</h2>
        <span className="details__info--nicknames">
          {nicknames}
        </span>

        <span className="details__info--">
          Occupation: {occupation}
        </span>
        <li className="details__info--">
          <strong> Status:</strong>
        </li>
        <li className="details__info--">
          <strong>Episodes:</strong>
        </li>
      </div>

    </div>
  )
}



export default CharacterDetails;