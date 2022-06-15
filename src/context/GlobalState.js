import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  characters: [],
};
//quiero guardar personajes 'https://rickandmortyapi.com/api/character

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getCharacters = async () => {
    const res = await axios.get(
      'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=PIR8Pzhi0OdlMuxijvHLrhubbUNGefqq'
    );

    dispatch({
      type: 'GET_CHARACTERS',
      payload: res.data.results, //aquí está el array de personajes, como estandar se llama payload
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        characters: state.characters,
        getCharacters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
