import React from 'react';
import './styles/characterPreview.scss';

function Preview(props) {

  const { id, image, name, gem } = props.characters;

  const style = {
    backgroundImage: `url("${image.current}")`,
    backgroundPosition: 'center',
    backgroundPosition: 'top center',
    backgroundSize: 'cover'
  }

  return (
    <div className="preview">
      <div className="preview__photo" style={style}></div>
      <div className="preview__info">
        <h3 className="preview__info--name">{name}</h3>
        <img className="preview__info--gem" src={gem.url}></img>
      </div>
    </div >
  )
}

export default Preview;