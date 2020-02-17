import React from 'react';
import './styles/characterPreview.scss';
import { Link } from 'react-router-dom';

function Preview(props) {

  const { id, name, gem, preview } = props.characters;

  const style = {
    backgroundImage: `url("${preview}")`,
    backgroundPosition: 'center',
    backgroundPosition: 'top center',
    backgroundSize: 'cover'
  }

  return (
    <div className="preview">
      <Link to={`/character/${id}`}>
        <div className="preview__photo" style={style}></div>
        <div className="preview__info">
          <h3 className="preview__info--name">{name}</h3>
          <img className="preview__info--gem" src={gem.url}></img>
        </div>
      </Link>
    </div >
  )
}

export default Preview;