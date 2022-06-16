import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './News.scss';

const News = () => {
  const { characters, getCharacters } = useContext(GlobalContext);
  useEffect(() => {
    getCharacters();
  }, []);
  const character = characters.map(character => {
    console.log(character);
    return (
      <article key={character.id} className='projects'>
        <div class='card'>
          <div>
            {character.media.length !== 0 ? (
              <img
                className='poster'
                src={character.media[0]['media-metadata'][2].url}
              />
            ) : null}
          </div>
          <div className='card-header'>
            <p>{character.section}</p>
            <h3 className='titulo'>{character.title}</h3>
          </div>
          <div className='card-bottom'>
            <p>{character.abstract.substring(0, 100)}</p>

            <p>{character.byline}</p>
          </div>
          <div className='card-link'>
            <a href={character.url} target='_blank'>
              Read more...
            </a>
            <p className='date'>{character.published_date}</p>
          </div>
        </div>
      </article>
    );
  });
  return <div className='container-card'>{character}</div>;
};

export default News;
