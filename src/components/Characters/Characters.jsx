import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Characters = () => {
  const { characters, getCharacters } = useContext(GlobalContext);
  useEffect(() => {
    getCharacters();
  }, []);
  const character = characters.map(character => {
    console.log(character);
    return (
      <div key={character.id}>
        <h1>{character.title}</h1>
        <p>{character.abstract}</p>
        <p>{character.byline},{character.published_date}</p>
        {character.media.length !==0 ?
        <img src={character.media[0]['media-metadata'][2].url} />:null}
        <br /><br />
        {/* <img src={character.media[0][media-metadata'][0].url} /> */}
      </div>
    );
  });
  return <div>{character}</div>;
};

export default Characters;
