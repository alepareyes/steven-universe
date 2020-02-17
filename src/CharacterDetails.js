import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "./styles/characterDetails.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiHeartOutline } from 'react-icons/ti';


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

  const { image, origin, name, alias, fusions, weapons, gem } = props.character;


  return (

    <div className="details">

      <Link to="/" >
        Go to index
        </Link>

      <div className="details__gem">
        <Slider
          speed={300}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={false}
          useCSS={false}
          dots={true}
          className="details__gem--slider"
        >
          {image.map((image) => {
            return (
              <div  >
                <img className="details__img" src={image.url} />
                <p className="details__img--name">{image.name} style</p>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="details__info">

        <h2 className="details__info--name">{name}</h2>
        <span>{alias}</span>


        <div className="details__gem">
          <img className="details__gem--img" src={gem.url} />
          <span className="details__gem--name">{gem.name}</span>
        </div>


        <div className="details__fusion">
          <h3>Fusions: </h3>
          <Slider
            speed={300}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={false}
            useCSS={false}
            className="details__fusion--slider"
          >
            {fusions.map((image) => {
              return (
                <div >
                  <p className="details__fusion--name">{image.name}</p>

                  <img className="details__fusion--img" src={image.url} />
                </div>
              );
            })}
          </Slider>
        </div>


        <div className="details__origin">
          {origin.map((origin) => {
            return (
              <div>
                <img className="details__origin--img" src={origin.url} />
              </div>
            );
          })}
          {/* <span className="details__origin--heart"> <TiHeartOutline /> </span> */}
        </div>

        <div className="details__weapons"> weaponss
        {weapons.map((weapon) => {
          return (
            <div>
              <img className="details__weapons--img" src={weapon.url} />
            </div>
          );
        })}
        </div>

      </div>
    </div >
  )
}



export default CharacterDetails;