import React from 'react'
import { IState, IAction } from './interfaces'


const initialState: IState = {
  episodes: [],
  favourites: []
}

export const Store = React.createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    case 'ADD_FAV':
      //const newFav:IEpisode[] = [...state.favourites];
      //console.log('newFav',newFav)
      //const idx = newFav.findIndex((item) => (item.id === action.payload.id));
      //console.log('idx',idx)

      return { ...state, favourites: [...state.favourites, action.payload] }

    /*
    if(idx === -1) { // if idx is -1 means episode is not stored and needs to be added otherwise delete it
      return { ...state, favourites: [...state.favourites, action.payload] }
    } else {
      newFav.splice(idx, 1)
      return {...state, favourites: [...newFav]}
    }
    */

    case 'DEL_FAV':
      /*
      const newFav: IEpisode[] = [...state.favourites];
      const idx = newFav.findIndex((item) => (item.id === action.payload.id));
      newFav.splice(idx, 1)
      */
      return { ...state, favourites: action.payload }
    default:
      return state
  }
}
  

export function StoreProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  )
}
