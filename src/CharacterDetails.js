import React from 'react';
import "./styles/characterDetails";

const CharacterDetail = (props) => {

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

  // const { image, name, species, origin, status, episode } = props.character;


  return (
    <div className="container">

      <div className="details">

        <img className="details__img" src="" />
        <div>

          {/* <Link to="/" >
            <div className="btn">
              <FontAwesomeIcon className="icon--exit" icon={faTimesCircle} />
            </div>
          </Link> */}

          <ul className="details__info">
            <h2 className="details__info--name"></h2>
            <li className="details__info--specie">
              <strong>Specie:</strong>
            </li>
            <li className="details__info--">
              <strong>Planet:</strong>
            </li>
            <li className="details__info--">
              <strong> Status:</strong>
            </li>
            <li className="details__info--">
              <strong>Episodes:</strong>
            </li>
          </ul>
          {/* <div className="icons">{whichSpecie(species)} {whichStatus(status)}</div> */}
        </div>
      </div>
    </div>
  )
}



export default CharacterDetail;