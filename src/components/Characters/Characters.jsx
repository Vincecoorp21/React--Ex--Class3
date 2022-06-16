import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './Characters.scss';

const Characters = () => {
  const { characters, getCharacters } = useContext(GlobalContext);
  useEffect(() => {
    getCharacters();
  }, []);
  const character = characters.map(character => {
    console.log(character);
    return (
      <article key={character.id} className="projects">
        <div class='card'>
        <div className="card-header">
        <p>{character.section}</p>
        <h3 className='titulo'>{character.title}</h3>
        </div>
        {character.media.length !==0 ?
        <img className='poster' src={character.media[0]['media-metadata'][2].url} />:null}
        <p>{character.abstract}</p>
        <p>{character.byline},{character.published_date}</p>
        
      </div>
      </article>
    );
  });
  return <div className='container-card'>{character}</div>;
};

export default Characters;
