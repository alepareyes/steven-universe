import React from 'react';
import Preview from './CharacterPreview';
import "./styles/characterList.scss";

function List(props) {

  const notFound = props.characters.length === 0 ? <div className="notfound">Character not found :( sorry!!<img className="notfound__img" src="https://66.media.tumblr.com/0246df9969d3ab2fc2d0c6f8604698b8/tumblr_noj59fgk8y1unqpleo1_1280.png" /> </div> : ""

  return (
    <main className="main">
      {notFound}
      {props.characters.map((character) => {
        return (
          <Preview
            key={character.id}
            characters={character} />
        )
      })}

    </main>
  )
}

export default List;