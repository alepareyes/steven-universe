import React from 'react';
import Preview from './CharacterPreview';
import "./styles/characterList.scss";

function List(props) {

  // const notFound = props.characters.length === 0 ? <p className="notfound">Character not found :( sorry!!</p> : ""

  return (
    <main className="main">
      {/* {notFound} */}
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